#!/bin/sh
set -e

echo "Replacing environment placeholders..."

find /app/.next -type f \( -name "*.js" -o -name "*.html" \) | while read file; do
  sed -i "s|__PHONE_DISPLAY__|${NEXT_PUBLIC_PHONE_DISPLAY:-+54 9 2634 73-9193}|g" "$file"
  sed -i "s|__PHONE_INTERNATIONAL__|${NEXT_PUBLIC_PHONE_INTERNATIONAL:-+5492634739193}|g" "$file"
  sed -i "s|__WHATSAPP_ID__|${NEXT_PUBLIC_WHATSAPP_ID:-5492634739193}|g" "$file"
  sed -i "s|__ADDRESS__|${NEXT_PUBLIC_ADDRESS:-Ladislao Segura 190, M5573 Junín, Mendoza}|g" "$file"
  sed -i "s|__INSTAGRAM__|${NEXT_PUBLIC_INSTAGRAM:-flamastudio.ar}|g" "$file"
  sed -i "s|__MAPS_URL__|${NEXT_PUBLIC_MAPS_URL:-https://maps.app.goo.gl/tDXcngSKQLuvmzuZ7}|g" "$file"
  sed -i "s|__HOURS__|${NEXT_PUBLIC_HOURS:-Lun a Vie, 9:30–17:30}|g" "$file"
done

echo "Done. Starting server..."
exec node server.js
