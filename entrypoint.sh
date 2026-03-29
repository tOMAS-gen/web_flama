#!/bin/sh
set -e

echo "Replacing environment placeholders..."

# Replace in ALL text files under .next and server (JS, HTML, RSC, JSON, etc.)
find /app/.next /app/server 2>/dev/null -type f \( \
  -name "*.js" -o -name "*.html" -o -name "*.json" \
  -o -name "*.rsc" -o -name "*.body" -o -name "*.meta" \
  \) | while read file; do
  sed -i \
    -e "s|__PHONE_DISPLAY__|${NEXT_PUBLIC_PHONE_DISPLAY:-+54 9 2634 73-9193}|g" \
    -e "s|__PHONE_INTERNATIONAL__|${NEXT_PUBLIC_PHONE_INTERNATIONAL:-+5492634739193}|g" \
    -e "s|__WHATSAPP_ID__|${NEXT_PUBLIC_WHATSAPP_ID:-5492634739193}|g" \
    -e "s|__ADDRESS__|${NEXT_PUBLIC_ADDRESS:-Ladislao Segura 190, M5573 Junín, Mendoza}|g" \
    -e "s|__INSTAGRAM__|${NEXT_PUBLIC_INSTAGRAM:-flamastudio.ar}|g" \
    -e "s|__MAPS_URL__|${NEXT_PUBLIC_MAPS_URL:-https://maps.app.goo.gl/tDXcngSKQLuvmzuZ7}|g" \
    -e "s|__HOURS__|${NEXT_PUBLIC_HOURS:-Lun a Vie, 9:30–17:30}|g" \
    "$file"
done

echo "Done. Starting server..."
exec node server.js
