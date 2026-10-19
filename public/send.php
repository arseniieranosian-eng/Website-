<?php
// Receives the JSON from the site's lead form and e-mails its contents to the owner.
// Runs on any PHP hosting (PHP 7.4+). No database, no third-party service.

const TO_EMAIL    = 'arseniieranosian@gmail.com';
const FROM_EMAIL  = 'no-reply@seo-eranosian.com'; // must be an address on the site's own domain (SPF)
const SITE_HOSTS  = ['seo-eranosian.com', 'www.seo-eranosian.com'];
const MAX_PER_HOUR = 5;                           // per IP
const MIN_FILL_MS  = 2500;                        // faster than this = bot

$SERVICES = [
    'audit' => 'Бесплатный SEO-аудит', 'consulting' => 'Консультация', 'start' => 'Старт на 3 месяца',
    'fullSeo' => 'Full SEO на год', 'maps' => 'Карты (Google + Seznam)', 'geo' => 'SEO + GEO', 'other' => 'Другое',
];
$LANGS = ['cs' => 'чешский', 'en' => 'английский', 'ru' => 'русский'];

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');


// Optional SMTP settings live in send-config.php (created on the server, NOT in git, so the
// password never leaves the hosting). Without it the script falls back to PHP mail().
// send-config.php example:
//   <?php return ['host' => 'websmtp.cesky-hosting.cz', 'port' => 25, 'secure' => 'tls', 'user' => 'seo-eranosian.com', 'pass' => '...', 'from' => 'no-reply@seo-eranosian.com'];
// 'secure': '' (none), 'tls' (STARTTLS) or 'ssl' (implicit TLS). 'user'/'pass' only if the server requires login.
$CFG = is_file(__DIR__ . '/send-config.php') ? (array) (include __DIR__ . '/send-config.php') : [];

function log_error(string $msg): void {
    $line = date('c') . ' ' . $msg . "\n";
    // Try a place outside the web root first; fall back to the PHP error log.
    if (@file_put_contents(__DIR__ . '/../send-errors.log', $line, FILE_APPEND) === false) error_log('lead form: ' . $msg);
}

function smtp_read($fp): array {
    $text = ''; $code = 0;
    while (($line = fgets($fp, 1024)) !== false) {
        $text .= $line;
        $code = (int) substr($line, 0, 3);
        if (strlen($line) < 4 || $line[3] !== '-') break;
    }
    return [$code, trim($text)];
}
function smtp_cmd($fp, string $cmd, array $ok, ?string $label = null): string {
    fwrite($fp, $cmd . "\r\n");
    [$code, $text] = smtp_read($fp);
    // $label hides credentials from the error log.
    if (!in_array($code, $ok, true)) throw new RuntimeException("SMTP '" . ($label ?? $cmd) . "' -> $text");
    return $text;
}
function smtp_send(array $c, string $from, string $to, string $subject, array $headers, string $body): void {
    $secure = $c['secure'] ?? '';
    $verify = $c['verify'] ?? true; // set 'verify' => false only if the server certificate cannot be validated
    $ctx = stream_context_create(['ssl' => ['peer_name' => $c['host'], 'verify_peer' => $verify, 'verify_peer_name' => $verify]]);
    $fp = @stream_socket_client(($secure === 'ssl' ? 'ssl://' : 'tcp://') . $c['host'] . ':' . ($c['port'] ?? 25), $en, $es, 10, STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) throw new RuntimeException("SMTP connect failed: $es ($en)");
    stream_set_timeout($fp, 15);
    try {
        [$code, $text] = smtp_read($fp);
        if ($code !== 220) throw new RuntimeException("SMTP greeting -> $text");
        $me = 'seo-eranosian.com';
        smtp_cmd($fp, "EHLO $me", [250]);
        if ($secure === 'tls') {
            smtp_cmd($fp, 'STARTTLS', [220]);
            if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) throw new RuntimeException('SMTP STARTTLS failed');
            smtp_cmd($fp, "EHLO $me", [250]);
        }
        if (!empty($c['user'])) {
            smtp_cmd($fp, 'AUTH LOGIN', [334]);
            smtp_cmd($fp, base64_encode($c['user']), [334], 'AUTH username');
            smtp_cmd($fp, base64_encode($c['pass'] ?? ''), [235], 'AUTH password');
        }
        smtp_cmd($fp, "MAIL FROM:<$from>", [250]);
        smtp_cmd($fp, "RCPT TO:<$to>", [250, 251]);
        smtp_cmd($fp, 'DATA', [354]);
        $all = array_merge(
            ['Date: ' . date('r'), 'To: ' . $to, 'Subject: ' . $subject, 'Message-ID: <' . bin2hex(random_bytes(8)) . '@seo-eranosian.com>'],
            $headers
        );
        $msg = implode("\r\n", $all) . "\r\n\r\n" . preg_replace('/\r\n|\r|\n/', "\r\n", $body);
        $msg = preg_replace('/^\./m', '..', $msg); // dot-stuffing
        smtp_cmd($fp, $msg . "\r\n.", [250]);
        @fwrite($fp, "QUIT\r\n");
    } finally {
        fclose($fp);
    }
}

function reply(int $code, array $body): void { http_response_code($code); echo json_encode($body); exit; }
function clean($v, int $max): string {
    $v = is_string($v) ? $v : '';
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v) ?? '';
    return mb_substr(trim($v), 0, $max);
}
function oneLine(string $v): string { return trim(preg_replace('/\s+/u', ' ', $v) ?? ''); }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') reply(405, ['ok' => false, 'error' => 'method']);

// Same-origin only (the browser always sends Origin on cross-site POSTs).
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array(parse_url($origin, PHP_URL_HOST), SITE_HOSTS, true) && !getenv('FORM_DRY_RUN')) {
    reply(403, ['ok' => false, 'error' => 'origin']);
}

$raw = file_get_contents('php://input', false, null, 0, 40000);
$in = json_decode($raw ?: '', true);
if (!is_array($in)) reply(400, ['ok' => false, 'error' => 'bad_request']);

// Bots: filled honeypot or inhumanly fast submit → pretend success, send nothing.
$started = (float) ($in['started'] ?? 0);
if (clean($in['company'] ?? '', 50) !== '' || ($started > 0 && (microtime(true) * 1000 - $started) < MIN_FILL_MS)) {
    reply(200, ['ok' => true]);
}

$name    = oneLine(clean($in['name'] ?? '', 120));
$contact = oneLine(clean($in['contact'] ?? '', 160));
$website = oneLine(clean($in['website'] ?? '', 200));
$message = clean($in['message'] ?? '', 3000);
$service = array_key_exists($in['service'] ?? '', $SERVICES) ? $in['service'] : 'other';
$lang    = array_key_exists($in['lang'] ?? '', $LANGS) ? $in['lang'] : 'cs';
$formId  = oneLine(clean($in['form_id'] ?? '', 60));
$page    = oneLine(clean($in['page'] ?? '', 200));

$isEmail = filter_var($contact, FILTER_VALIDATE_EMAIL) !== false;
$isPhone = (bool) preg_match('/^\+?[\d\s().-]{9,20}$/', $contact);
if ($name === '' || (!$isEmail && !$isPhone) || ($in['consent'] ?? '') !== 'yes') {
    reply(422, ['ok' => false, 'error' => 'validation']);
}

// Rate limit per IP.
$ip = $_SERVER['REMOTE_ADDR'] ?? '0';
$file = sys_get_temp_dir() . '/lead-rate-' . md5($ip);
$now = time();
$hits = array_filter(is_file($file) ? array_map('intval', explode(',', (string) file_get_contents($file))) : [], fn($t) => $t > $now - 3600);
if (count($hits) >= MAX_PER_HOUR) reply(429, ['ok' => false, 'error' => 'rate']);
$hits[] = $now;
@file_put_contents($file, implode(',', $hits), LOCK_EX);

$subject = 'Новая заявка с сайта: ' . $SERVICES[$service] . ' — ' . $name;
$body = implode("\n", [
    'Новая заявка с сайта seo-eranosian.com',
    '',
    'Имя: ' . $name,
    'E-mail / телефон: ' . $contact,
    'Адрес сайта: ' . ($website !== '' ? $website : '—'),
    'Интересует: ' . $SERVICES[$service],
    '',
    'Сообщение:',
    $message !== '' ? $message : '—',
    '',
    '— — —',
    'Язык страницы: ' . $LANGS[$lang],
    'Страница: ' . ($page !== '' ? $page : '—'),
    'Форма: ' . ($formId !== '' ? $formId : '—'),
    'Время: ' . date('Y-m-d H:i:s T'),
    'Согласие на обработку данных: да',
]);

$headers = [
    'From: =?UTF-8?B?' . base64_encode('Сайт seo-eranosian.com') . '?= <' . ($CFG['from'] ?? FROM_EMAIL) . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: seo-eranosian-form',
];
if ($isEmail) $headers[] = 'Reply-To: ' . $contact; // validated by FILTER_VALIDATE_EMAIL: no line breaks possible
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';

if (getenv('FORM_DRY_RUN')) { // local testing only
    file_put_contents(getenv('FORM_DRY_RUN'), $encodedSubject . "\n" . implode("\n", $headers) . "\n\n" . $body . "\n");
    reply(200, ['ok' => true]);
}

$sender = $CFG['from'] ?? FROM_EMAIL;
try {
    if (!empty($CFG['host'])) {
        smtp_send($CFG, $sender, TO_EMAIL, $encodedSubject, $headers, $body);
    } else {
        $sent = @mail(TO_EMAIL, $encodedSubject, $body, implode("\r\n", $headers), '-f' . $sender)
             || @mail(TO_EMAIL, $encodedSubject, $body, implode("\r\n", $headers));
        if (!$sent) throw new RuntimeException('mail() returned false (disabled or rejected by the server)');
    }
} catch (Throwable $e) {
    log_error($e->getMessage());
    reply(500, ['ok' => false, 'error' => 'mail']);
}
reply(200, ['ok' => true]);
