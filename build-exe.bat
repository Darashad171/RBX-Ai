@echo off
REM RBX-AI Desktop Build Script for Windows
REM Run this from the RBX-Ai root directory

echo.
echo ========================================
echo   RBX-AI Build Script
echo ========================================
echo.

REM Check if we're in the right directory
if not exist "frontend" (
  echo ERROR: Please run this script from the RBX-Ai root directory!
  echo.
  pause
  exit /b 1
)

REM Install frontend dependencies
echo [1/3] Installing frontend dependencies...
echo.
cd frontend
call npm install
if %errorlevel% neq 0 (
  echo.
  echo ERROR: Frontend npm install failed!
  cd ..
  pause
  exit /b 1
)

REM Build frontend
echo.
echo [2/3] Building frontend with Vite...
echo.
call npm run build
if %errorlevel% neq 0 (
  echo.
  echo ERROR: Frontend build failed!
  cd ..
  pause
  exit /b 1
)

REM Create executable with Electron Builder
echo.
echo [3/3] Creating executable with Electron Builder...
echo.
call npm run start
if %errorlevel% neq 0 (
  echo.
  echo ERROR: Executable creation failed!
  echo Try running the following commands manually:
  echo   cd frontend
  echo   npm install
  echo   npm run build
  echo   npm run start
  cd ..
  pause
  exit /b 1
)

cd ..

echo.
echo ========================================
echo   BUILD SUCCESSFUL!
echo ========================================
echo.
echo Executables created in: frontend\dist
echo.
echo Files:
echo   - RBX-AI Setup 1.0.0.exe (Installer - Recommended)
echo   - RBX-AI 1.0.0.exe (Portable - No installation)
echo.
pause
