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
    'From: =?UTF-8?B?' . base64_encode('Сайт seo-eranosian.com') . '?= <' . FROM_EMAIL . '>',
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

$sent = @mail(TO_EMAIL, $encodedSubject, $body, implode("\r\n", $headers), '-f' . FROM_EMAIL)
     || @mail(TO_EMAIL, $encodedSubject, $body, implode("\r\n", $headers));
if (!$sent) {
    error_log('lead form: mail() failed');
    reply(500, ['ok' => false, 'error' => 'mail']);
}
reply(200, ['ok' => true]);
