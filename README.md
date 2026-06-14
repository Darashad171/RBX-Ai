# RBX-AI - Multi-Provider AI Chat Application

A powerful desktop and web application for AI chat with support for multiple AI providers and autonomous agent mode.

## 🌟 Features

### Multi-Provider AI Support
- 🔵 **OpenAI** - GPT-4, GPT-3.5-Turbo
- 🤖 **Anthropic** - Claude 3 series
- 🔍 **Google Gemini** - Latest models
- ⚡ **Groq** - Ultra-fast inference
- 🟣 **Deepseek** - High-performance models
- 🌐 **OpenRouter** - Multi-model access
- 🔗 **Together AI** - Open-source models

### Core Features
- 💬 Real-time chat interface
- 🎯 Agent mode for autonomous tasks
- 📚 Conversation history
- 🔐 Secure API key management
- 🎨 Dark mode Bootstrap UI
- 💾 Local data persistence
- 🖥️ Desktop & Web versions

## 🚀 Quick Start

### Web Version
```bash
# Backend
cd backend
npm install
cp .env.example .env
# Add your API keys to .env
npm start

# Frontend (in another terminal)
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`

### Desktop Version (.exe)

#### Option 1: Download from Releases
1. Go to [Releases](https://github.com/Darashad171/RBX-Ai/releases)
2. Download `RBX-AI-Setup.exe` or `RBX-AI.exe` (portable)
3. Run the installer
4. Launch RBX-AI

#### Option 2: Build Yourself
```bash
# Windows
double-click build-exe.bat

# Mac/Linux
chmod +x build-exe.sh
./build-exe.sh
```

See [DESKTOP_BUILD.md](DESKTOP_BUILD.md) for detailed instructions.

## 📖 Documentation

- **[SETUP.md](SETUP.md)** - Complete setup guide
- **[DESKTOP_BUILD.md](DESKTOP_BUILD.md)** - Building desktop executable
- **API Documentation** - See SETUP.md for REST API endpoints

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **AI Integrations**: Multiple provider SDKs
- **Language**: JavaScript

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **UI Library**: Bootstrap 5
- **Desktop**: Electron

### Features
- **Agent Mode**: Autonomous task execution
- **Chat Interface**: Real-time messaging
- **Settings Management**: User preferences
- **Conversation History**: Local storage

## 📦 Project Structure

```
RBX-Ai/
├── backend/
│   ├── config/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   ├── public/
│   │   ├── electron.js
│   │   └── preload.js
│   ├── package.json
│   └── vite.config.js
├── build-exe.bat
├── build-exe.sh
├── SETUP.md
├── DESKTOP_BUILD.md
├── README.md
└── .gitignore
```

## 🔑 API Keys

### Getting Started
1. Get API keys from each provider:
   - [OpenAI](https://platform.openai.com/api-keys)
   - [Anthropic](https://console.anthropic.com)
   - [Google Gemini](https://makersuite.google.com/app/apikey)
   - [Groq](https://console.groq.com/keys)
   - [Deepseek](https://api.deepseek.com)
   - [OpenRouter](https://openrouter.ai/keys)
   - [Together AI](https://www.together.ai)

2. Add to `backend/.env`:
   ```
   OPENAI_API_KEY=your_key
   ANTHROPIC_API_KEY=your_key
   # ... etc
   ```

3. Restart backend server

## 🎯 Agent Mode

Create autonomous agents to handle complex tasks:

1. **Create Agent**
   - Give it a name and goal
   - Select provider and model

2. **Execute**
   - Agent analyzes the goal
   - Breaks into steps
   - Executes autonomously

3. **Monitor**
   - Track execution progress
   - View step results
   - Manage active agents

## 🔧 Development

### Adding a New Provider

1. Add to `backend/config/providers.js`:
```javascript
newprovider: {
  name: 'New Provider',
  apiKey: process.env.NEW_PROVIDER_API_KEY,
  models: ['model-1', 'model-2']
}
```

2. Implement in `backend/services/aiService.js`:
```javascript
async sendToNewProvider(messages, model, options) {
  // Implementation here
}
```

3. Provider is automatically available!

### Frontend Development
- Edit components in `frontend/src/components/`
- Update API calls in `frontend/src/services/api.js`
- Styles in `frontend/src/index.css`

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📝 License

MIT License - see LICENSE file for details

## 🆘 Support

- **Documentation**: Check [SETUP.md](SETUP.md) and [DESKTOP_BUILD.md](DESKTOP_BUILD.md)
- **Issues**: Create an issue on GitHub
- **Discussions**: Use GitHub Discussions

## 🎉 Features Coming Soon

- [ ] Text-to-speech
- [ ] Voice input
- [ ] Image generation integration
- [ ] Plugin system
- [ ] Advanced analytics
- [ ] Team collaboration
- [ ] Cloud sync

## 📊 Stats

- 7 AI providers
- Multi-agent support
- Real-time chat
- Conversation history
- Cross-platform (Windows, Mac, Linux, Web)

---

**Built with ❤️ by Darashad171**

[⭐ Star on GitHub](https://github.com/Darashad171/RBX-Ai) | [📥 Download](https://github.com/Darashad171/RBX-Ai/releases) | [🐛 Report Issue](https://github.com/Darashad171/RBX-Ai/issues)
