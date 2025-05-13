#!/bin/bash

# Verify Node.js version
echo "Node.js version: $(node -v)"
echo "NPM version: $(npm -v)"

# Install dependencies
echo "Installing dependencies..."
npm ci

# Run build
echo "Building project..."
npm run build

# Verify build output
echo "Verifying build output..."
ls -la dist/

echo "Build process completed successfully!" 