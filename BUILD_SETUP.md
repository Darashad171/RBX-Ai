# RBX-AI Build Setup Guide

## ⚠️ Important: Setup Instructions

Before building the .exe, you need to set up the project:

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### Step 2: Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### Step 3: Build the Application

**Option A - Automatic (Recommended for Windows):**
```bash
double-click build-exe.bat
```

**Option B - Automatic (Mac/Linux):**
```bash
chmod +x build-exe.sh
./build-exe.sh
```

**Option C - Manual:**
```bash
cd frontend
npm run build
npm run start
```

## 📝 Step-by-Step Manual Build

If automatic scripts fail:

1. **Navigate to frontend directory**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Build the app**
```bash
npm run build
```

4. **Create executable**
```bash
npm run start
```

## 📍 Output Location

After successful build, executables will be in:
```
frontend/dist/
├── RBX-AI Setup 1.0.0.exe    (Installer)
└── RBX-AI 1.0.0.exe          (Portable)
```

## 🐛 Troubleshooting

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue: "electron@^latest is invalid"
**Solution:** This has been fixed in the latest version

### Issue: "Build failed"
**Solution:**
1. Delete `node_modules` folder in frontend
2. Delete `package-lock.json`
3. Run `npm install` again
4. Try building again

### Issue: "Port 5000 already in use"
**Solution:** Kill the process using port 5000:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### Issue: "No such file or directory"
**Solution:** Make sure you're in the RBX-Ai root directory when running the scripts

## 📊 Build Requirements

- **Disk Space:** 2GB free space (for node_modules)
- **RAM:** 4GB minimum
- **Node.js:** v16 or higher
- **npm:** v7 or higher

Check versions:
```bash
node --version
npm --version
```

## 🎯 What Gets Built

The .exe includes:
- ✅ React frontend (compiled)
- ✅ Electron framework
- ✅ All node_modules
- ✅ CSS and assets
- ✅ 🚀 Ready to distribute!

## 📥 Distributing Your App

Once built, you can:

1. **Share the .exe directly** - No installation needed for portable version
2. **Create a GitHub Release** - Upload to Releases page
3. **Create an installer** - Use the Setup .exe for professional distribution

## 🔧 Advanced: Customization

To change the app icon, replace:
```
frontend/public/icon.png
```

To change app name/version, edit:
```
frontend/package.json
```

---

Need help? Check [DESKTOP_BUILD.md](DESKTOP_BUILD.md) for more details.
