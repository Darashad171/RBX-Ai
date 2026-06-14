# RBX-AI Setup Guide

## Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Darashad171/RBX-Ai.git
cd RBX-Ai
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file with your API keys
cp .env.example .env

# Edit .env and add your API keys:
# OPENAI_API_KEY=your_key_here
# DEEPSEEK_API_KEY=your_key_here
# ANTHROPIC_API_KEY=your_key_here
# GEMINI_API_KEY=your_key_here
# OPENROUTER_API_KEY=your_key_here
# GROQ_API_KEY=your_key_here
# TOGETHER_AI_API_KEY=your_key_here

# Start the server
npm start

# For development with auto-reload:
npm run dev
```

Server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

## API Keys Setup

### OpenAI
1. Go to https://platform.openai.com/api-keys
2. Create new API key
3. Add to `.env`: `OPENAI_API_KEY=sk-...`

### Anthropic (Claude)
1. Go to https://console.anthropic.com
2. Create API key
3. Add to `.env`: `ANTHROPIC_API_KEY=sk-ant-...`

### Google Gemini
1. Go to https://makersuite.google.com/app/apikey
2. Create API key
3. Add to `.env`: `GEMINI_API_KEY=...`

### Groq
1. Go to https://console.groq.com/keys
2. Create API key
3. Add to `.env`: `GROQ_API_KEY=...`

### Deepseek
1. Go to https://api.deepseek.com
2. Create API key
3. Add to `.env`: `DEEPSEEK_API_KEY=...`

### OpenRouter
1. Go to https://openrouter.ai/keys
2. Create API key
3. Add to `.env`: `OPENROUTER_API_KEY=...`

### Together AI
1. Go to https://www.together.ai
2. Create API key
3. Add to `.env`: `TOGETHER_AI_API_KEY=...`

## Features

### Chat Interface
- Real-time messaging
- Multi-provider support
- Conversation history
- Dark mode UI

### Agent Mode
- Create autonomous agents
- Define goals and tasks
- Multi-step execution
- Agent management

### Settings
- Provider selection
- Model configuration
- Theme preferences
- API key management

## API Documentation

### Chat Endpoints

**Send Message**
```
POST /api/chat/message
{
  "provider": "openai",
  "model": "gpt-3.5-turbo",
  "messages": [
    { "role": "user", "content": "Hello" }
  ],
  "options": {
    "temperature": 0.7,
    "maxTokens": 2000
  }
}
```

**Stream Message**
```
POST /api/chat/stream
(Same as above, returns SSE stream)
```

### Provider Endpoints

**Get Available Providers**
```
GET /api/providers
```

**Get Provider Models**
```
GET /api/providers/:provider/models
```

**Test Connection**
```
POST /api/providers/:provider/test
```

### Agent Endpoints

**Create Agent**
```
POST /api/agent/create
{
  "name": "Data Analyzer",
  "goal": "Analyze sales data",
  "provider": "openai",
  "model": "gpt-3.5-turbo"
}
```

**Execute Agent**
```
POST /api/agent/:agentId/execute
```

**Agent Step**
```
POST /api/agent/:agentId/step
{
  "userInput": "Continue with next step"
}
```

**Get Agent Status**
```
GET /api/agent/:agentId
```

**List Agents**
```
GET /api/agent
```

**Delete Agent**
```
DELETE /api/agent/:agentId
```

## Project Structure

```
RBX-Ai/
├── backend/
│   ├── config/
│   │   └── providers.js        # Provider configuration
│   ├── routes/
│   │   ├── chat.js            # Chat routes
│   │   ├── providers.js       # Provider routes
│   │   ├── agent.js           # Agent routes
│   │   └── settings.js        # Settings routes
│   ├── services/
│   │   └── aiService.js       # AI service layer
│   ├── server.js              # Express server
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── AgentMode.jsx
│   │   ├── services/
│   │   │   └── api.js         # API client
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .env.example
│
├── README.md
├── SETUP.md
└── .gitignore
```

## Troubleshooting

### Port Already in Use
```bash
# Change PORT in .env
PORT=5001

# Or kill existing process
lsof -ti:5000 | xargs kill -9  # Mac/Linux
netstat -ano | findstr :5000   # Windows
```

### CORS Issues
Make sure backend is running and frontend proxy is configured in `vite.config.js`

### API Key Not Working
- Check `.env` file is in correct directory
- Verify API keys are valid
- Check provider is configured in environment

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Development

### Adding New Provider
1. Add provider config to `backend/config/providers.js`
2. Implement provider method in `backend/services/aiService.js`
3. Provider will be automatically available

### Extending Features
- Add routes in `backend/routes/`
- Add components in `frontend/src/components/`
- Add API calls in `frontend/src/services/api.js`

## Support

For issues or questions, create an issue on GitHub or check the documentation.

---

Happy coding! 🚀
