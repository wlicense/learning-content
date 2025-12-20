#!/bin/bash

cd /Users/hajime/Desktop/learning-content

# Update all metadata.json files
find . -name "metadata.json" -type f | grep -v node_modules | while IFS= read -r file; do
  echo "Updating: $file"
  sed -i '' 's/"book_name": "AI画像生成ツール解説"/"book_name": "FLUX"/g' "$file"
  sed -i '' 's/"book_name": "UTAGE"/"book_name": "Hedra"/g' "$file"
  sed -i '' 's/"book_name": "ヒグスNanobanana.txt"/"book_name": "ヒグス✖️ Nanobanana"/g' "$file"
  sed -i '' 's/"book_name": "健康長寿ハック"/"book_name": "健康"/g' "$file"
done

echo "All metadata.json files updated!"
