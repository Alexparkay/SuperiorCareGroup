#!/bin/bash
set -e

# Verify Node.js version
echo "Node.js version: $(node -v)"
echo "NPM version: $(npm -v)"

# Clear any existing node_modules to avoid conflicts
if [ -d "node_modules" ]; then
  echo "Removing existing node_modules..."
  rm -rf node_modules
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Run build
echo "Building project..."
npm run build

# Verify build output
echo "Verifying build output..."
if [ -d "dist" ]; then
  ls -la dist/
  echo "Build process completed successfully!"
else
  echo "Error: Build failed - dist directory not created"
  exit 1
fi 