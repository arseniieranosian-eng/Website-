#!/usr/bin/env bash
# Prepares public/media/audit-example-cs.mp4 + poster from the raw Czech screen recording of the sample presentation:
# covers the crawler name (slide 2) and real product / brand names (slides 3-4, by time range) with neutral text.
# Usage: scripts/prepare-audit-video-cs.sh raw.mp4
# NOTE: the time ranges / coordinates match the 20.10.2026 recording; re-check them after re-exporting the video.
set -euo pipefail
IN="${1:?usage: prepare-audit-video-cs.sh raw.mp4}"
OUT=public/media/audit-example-cs.mp4
REG=/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf
BOLD=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf
[ -f "$REG" ] || REG=/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf
[ -f "$BOLD" ] || BOLD=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf
S2="between(t,2.97,5.95)"; S3="between(t,5.97,8.95)"; S4="between(t,8.97,11.95)"
box() { echo "drawbox=x=$1:y=$2:w=$3:h=$4:color=white:t=fill:enable='$5'"; }
txt() { echo "drawtext=fontfile=$1:text='$2':x=$3:y=$4:fontsize=$5:fontcolor=$6:enable='$7'"; }
join() { local IFS=,; echo "$*"; }
VF=$(join \
 "$(box 482 264 300 56 "$S2")" "$(txt $REG 'položek v reportu crawlu' 487 268 19 black "$S2")" \
 "$(box 78 346 540 28 "$S3")" "$(txt $REG 'Například kartu jednoho z produktů.' 80 350 15 0x777777 "$S3")" \
 "$(box 668 222 440 24 "$S4")" "$(txt $REG 'vase-domena.cz › produkt › nazev-produktu-…' 683 226 14 0x666666 "$S4")" \
 "$(box 668 252 520 60 "$S4")" "$(txt $BOLD 'Název produktu – Intenzivní pleťové…' 683 258 20 0x1a0dab "$S4")" \
 "$(box 655 448 560 44 "$S4")" "$(txt $REG 'Název produktu – Intenzivní pleťové sérum' 659 451 15 black "$S4")" "$(txt $REG 'pro citlivou pleť – 50 ml | Název obchodu' 659 470 15 black "$S4")")
ffmpeg -v error -y -i "$IN" -vf "$VF" -an -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "$OUT"
ffmpeg -v error -y -ss 4.0 -i "$OUT" -frames:v 1 -q:v 3 public/media/audit-example-cs-poster.jpg
ls -la "$OUT" public/media/audit-example-cs-poster.jpg
