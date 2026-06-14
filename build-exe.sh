#!/bin/bash

# RBX-AI Desktop Build Script for Windows

echo "🚀 Building RBX-AI Desktop Application..."

# Install dependencies if not already installed
if [ ! -d "frontend/node_modules" ]; then
  echo "📦 Installing frontend dependencies..."
  cd frontend
  npm install
  cd ..
fi

if [ ! -d "backend/node_modules" ]; then
  echo "📦 Installing backend dependencies..."
  cd backend
  npm install
  cd ..
fi

# Build the Electron app
echo "🔨 Building Electron application..."
cd frontend
npm run build

echo "✅ Build complete!"
echo "📁 Executables are in: frontend/dist"
