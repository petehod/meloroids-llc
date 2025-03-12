#!/bin/bash

# Get the directory of the script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Define the base directory
BASE_DIR="$SCRIPT_DIR/apps"

# Loop through each directory inside /apps
for dir in "$BASE_DIR"/*/ ; do
  # Check if it's a directory
  if [ -d "$dir" ]; then
    echo "Entering directory $dir"
    # Run npm install in the directory
    (cd "$dir" && npm install)
  fi
done