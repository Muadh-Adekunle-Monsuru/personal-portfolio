#!/bin/bash

# Find all PNG files in the current directory and its subdirectories
find . -type f -name "*.png" -print0 | while IFS= read -r -d $'\0' file; do
    # Convert each PNG file to WebP format using cwebp
    filename=$(basename -- "$file")  # Extract the filename without the path
    cwebp "$file" -o "${filename}.webp"  # Convert to WebP format
done
