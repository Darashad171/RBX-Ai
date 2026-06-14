@echo off
REM RBX-AI Desktop Build Script for Windows

echo 🚀 Building RBX-AI Desktop Application...

REM Install dependencies if not already installed
if not exist "frontend\node_modules" (
  echo 📦 Installing frontend dependencies...
  cd frontend
  call npm install
  cd ..
)

if not exist "backend\node_modules" (
  echo 📦 Installing backend dependencies...
  cd backend
  call npm install
  cd ..
)

REM Build the Electron app
echo 🔨 Building Electron application...
cd frontend
call npm run build

echo ✅ Build complete!
echo 📁 Executables are in: frontend\dist

pause
