# RBX-AI Build Setup Guide

## 🚀 Quick Start

### Prerequisites
Before building, make sure you have:
- **Node.js** v16 or higher - [Download](https://nodejs.org/)
- **npm** v7 or higher
- **2GB free disk space**

Check your versions:
```bash
node --version
npm --version
```

## 📋 Step-by-Step Build Instructions

### Option 1: Automated Build (Recommended)

**Windows:**
1. Navigate to your RBX-Ai folder
2. Double-click `build-exe.bat`
3. Wait for the process to complete
4. Your .exe files will be in `frontend/dist/`

**Mac/Linux:**
```bash
chmod +x build-exe.sh
./build-exe.sh
```

### Option 2: Manual Build

If the automated scripts don't work, follow these steps:

```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Build the app
npm run build

# 4. Create the executable
npm run start
```

## 📍 Output Location

After successful build, you'll find the executables in:
```
frontend/dist/
├── RBX-AI Setup 1.0.0.exe    (Installer - Recommended)
└── RBX-AI 1.0.0.exe          (Portable)
```

## 🐛 Troubleshooting

### Issue 1: "node: command not found"
**Problem:** Node.js is not installed or not in PATH
**Solution:** 
1. Download Node.js from https://nodejs.org/
2. Install it
3. Restart your terminal/command prompt
4. Try again

### Issue 2: "npm ERR! code EACCES"
**Problem:** Permission denied
**Solution:**
```bash
# Mac/Linux
sudo npm install -g npm

# Or use nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 16
```

### Issue 3: "electron: command not found"
**Problem:** Electron not installed
**Solution:**
```bash
cd frontend
npm install
```

### Issue 4: Build fails with "dist not found"
**Problem:** Vite build didn't create the dist folder
**Solution:**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue 5: Port 5000 already in use
**Problem:** Another process is using the build port
**Solution:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### Issue 6: "build config not found"
**Problem:** Wrong working directory
**Solution:** 
- Make sure you're in the `RBX-Ai` root folder
- Run `build-exe.bat` (Windows) or `build-exe.sh` (Mac/Linux) from there

## 🔄 Clean Build (If Having Issues)

If the build fails and you want to start fresh:

```bash
# Clean frontend
cd frontend
rm -rf node_modules dist package-lock.json
npm install
npm run build
npm run start

# Or for the build script
cd frontend
rm -rf node_modules
npm install
npm run build
npm run start
```

## 📦 What Gets Included

The .exe includes everything needed:
- ✅ React frontend (compiled)
- ✅ All UI components and styles
- ✅ Electron framework
- ✅ Backend support files
- ✅ Ready to run standalone!

## 🎯 After Build Success

Once you have the .exe files:

1. **Test them locally** - Double-click to run
2. **Share the .exe** - Users can run directly
3. **Create a GitHub Release** - Upload to share publicly
4. **Create an installer** - Use the Setup.exe for professional distribution

## 📊 Build Size

- **RBX-AI Setup 1.0.0.exe**: ~250MB (Installer)
- **RBX-AI 1.0.0.exe**: ~200MB (Portable)

The large size includes:
- Node.js runtime
- npm packages
- Electron framework
- Frontend assets
- Backend support

## 💡 Tips

1. **First build is slow** - Subsequent builds are faster
2. **Keep node_modules** - Don't delete unless you have issues
3. **Use SSD** - Faster build times if your disk is an SSD
4. **Close other apps** - Frees up RAM for the build

## 🔗 Resources

- [Electron Documentation](https://www.electronjs.org/docs)
- [Electron Builder Guide](https://www.electron.build/)
- [Vite Documentation](https://vitejs.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## ❓ Still Having Issues?

1. Check the error message carefully - it usually tells you what's wrong
2. Try a clean build (see above)
3. Make sure you're running from the correct directory
4. Update Node.js to the latest version
5. Create an issue on GitHub with the error details

---

**Good luck with your build! 🚀**
