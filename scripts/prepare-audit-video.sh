#!/usr/bin/env bash
# Prepares public/media/audit-example.mp4 + poster from the raw screen recording of the sample presentation:
# covers the crawler name and real product names (slides 2-4, by time range) with neutral text.
# Usage: scripts/prepare-audit-video.sh raw.mp4
# NOTE: the time ranges / coordinates match the 19.10.2026 recording; re-check them after re-exporting the video.
set -euo pipefail
IN="${1:?usage: prepare-audit-video.sh raw.mp4}"
OUT=public/media/audit-example.mp4
REG=/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf
BOLD=/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf
S2="between(t,2.74,4.53)"; S3="between(t,4.54,7.19)"; S4="between(t,7.21,10.46)"
box() { echo "drawbox=x=$1:y=$2:w=$3:h=$4:color=white:t=fill:enable='$5'"; }
txt() { echo "drawtext=fontfile=$1:text='$2':x=$3:y=$4:fontsize=$5:fontcolor=$6:enable='$7'"; }
join() { local IFS=,; echo "$*"; }
VF=$(join \
 "$(box 664 268 130 32 "$S2")" "$(box 488 298 70 32 "$S2")" "$(txt $REG 'краулера' 667 272 25 black "$S2")" \
 "$(box 84 454 540 64 "$S3")" "$(txt $REG 'карточку одного из товаров.' 89 458 25 black "$S3")" \
 "$(box 686 222 500 28 "$S4")" "$(txt $REG 'vase-domena.cz › produkt › nazev-produktu-…' 689 226 17 0x555555 "$S4")" \
 "$(box 686 252 500 66 "$S4")" "$(txt $BOLD 'Název produktu – Intenzivní pleťové…' 689 258 24 0x1a0dab "$S4")" \
 "$(box 686 476 500 80 "$S4")" "$(txt $REG 'Název produktu – Intenzivní pleťové sérum' 689 480 22 black "$S4")" "$(txt $REG 'pro citlivou pleť – 50 ml | Název obchodu' 689 508 22 black "$S4")")
ffmpeg -v error -y -i "$IN" -vf "$VF" -an -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart "$OUT"
ffmpeg -v error -y -ss 4.0 -i "$OUT" -frames:v 1 -q:v 3 public/media/audit-example-poster.jpg
ls -la "$OUT" public/media/audit-example-poster.jpg
