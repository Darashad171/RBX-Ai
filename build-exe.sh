#!/bin/bash

# RBX-AI Desktop Build Script
# Run this from the RBX-Ai root directory

echo ""
echo "========================================"
echo "  RBX-AI Build Script"
echo "========================================"
echo ""

# Check if we're in the right directory
if [ ! -d "frontend" ]; then
  echo "ERROR: Please run this script from the RBX-Ai root directory!"
  echo ""
  read -p "Press Enter to exit..."
  exit 1
fi

# Install frontend dependencies
echo "[1/3] Installing frontend dependencies..."
echo ""
cd frontend
npm install
if [ $? -ne 0 ]; then
  echo ""
  echo "ERROR: Frontend npm install failed!"
  cd ..
  read -p "Press Enter to exit..."
  exit 1
fi

# Build frontend
echo ""
echo "[2/3] Building frontend with Vite..."
echo ""
npm run build
if [ $? -ne 0 ]; then
  echo ""
  echo "ERROR: Frontend build failed!"
  cd ..
  read -p "Press Enter to exit..."
  exit 1
fi

# Create executable with Electron Builder
echo ""
echo "[3/3] Creating executable with Electron Builder..."
echo ""
npm run start
if [ $? -ne 0 ]; then
  echo ""
  echo "ERROR: Executable creation failed!"
  echo "Try running the following commands manually:"
  echo "  cd frontend"
  echo "  npm install"
  echo "  npm run build"
  echo "  npm run start"
  cd ..
  read -p "Press Enter to exit..."
  exit 1
fi

cd ..

echo ""
echo "========================================"
echo "  BUILD SUCCESSFUL!"
echo "========================================"
echo ""
echo "Executables created in: frontend/dist"
echo ""
echo "Files:"
echo "  - RBX-AI Setup 1.0.0.exe (Installer - Recommended)"
echo "  - RBX-AI 1.0.0.exe (Portable - No installation)"
echo ""
