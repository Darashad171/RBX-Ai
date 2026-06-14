# Desktop Application Build Instructions

## Building RBX-AI as a .exe (Windows)

### Prerequisites
- Node.js v14+
- npm
- Windows 7 or later

### Automated Build (Recommended)

**On Windows:**
```bash
double-click build-exe.bat
```

Or run in Command Prompt:
```cmd
build-exe.bat
```

**On Mac/Linux:**
```bash
chmod +x build-exe.sh
./build-exe.sh
```

### Manual Build Steps

1. **Install Dependencies**
```bash
cd frontend
npm install
cd ../backend
npm install
cd ..
```

2. **Build Electron App**
```bash
cd frontend
npm run build
```

3. **Create Executable**
The built executable files will be in:
```
frontend/dist/RBX-AI Setup 1.0.0.exe  (Installer)
frontend/dist/RBX-AI 1.0.0.exe        (Portable)
```

### What's Included in the .exe

✅ **Backend Server**
- Multi-provider AI service
- All 7 AI provider integrations
- Agent mode system
- REST API

✅ **Frontend Application**
- React-based chat interface
- Dark mode UI
- Conversation history
- Real-time messaging

✅ **Built-in Database**
- Local conversation storage
- Settings persistence

### Running the .exe

1. Download the executable from Releases
2. Double-click to run (Portable) or run installer
3. Application will automatically start

**Note:** The first launch may take a few seconds as it initializes the backend server.

### Troubleshooting

**"Backend not connecting"**
- Wait 5 seconds for backend to start
- Check Windows Firewall settings
- Restart the application

**"Port 5000 already in use"**
- Close other applications using port 5000
- Check: `netstat -ano | findstr :5000`

**"Missing dependencies"**
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run: `npm install` in both frontend and backend

### Customization

To customize the build:

1. Edit `frontend/package.json` - Change app name, version, icon
2. Replace `frontend/public/icon.png` with your custom icon
3. Modify `frontend/public/electron.js` for custom behavior
4. Run build script again

### Creating Releases

To create a GitHub Release with .exe:

1. Build the application (see above)
2. Go to GitHub Repository → Releases → Draft new release
3. Create tag: `v1.0.0`
4. Upload files from `frontend/dist/`:
   - `RBX-AI Setup 1.0.0.exe`
   - `RBX-AI 1.0.0.exe`
5. Add release notes
6. Publish

### Size Information

- **Installer (.exe)**: ~250MB
- **Portable (.exe)**: ~200MB
- **Extract size on disk**: ~500MB

The large size is due to:
- Node.js runtime included
- npm packages
- Backend server
- Electron framework

### Advanced Options

For additional build options, edit `frontend/package.json` under the `"build"` section:

```json
"build": {
  "appId": "com.rbxai.app",
  "productName": "RBX-AI",
  "win": {
    "target": [
      "nsis",      // Installer
      "portable"   // Single executable
    ]
  }
}
```

---

For more information, visit: https://github.com/Darashad171/RBX-Ai
