#!/bin/bash
set -e

echo "Starting build process..."

# Make sure node_modules/.bin is executable
chmod +x node_modules/.bin/* 2>/dev/null || true

# Run the build
node node_modules/vite/bin/vite.js build

echo "Build completed successfully!"
