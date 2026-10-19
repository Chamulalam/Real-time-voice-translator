#  Real-Time Voice Translator & AI Voice Agent

An AI-powered full-stack platform designed for low-latency speech interaction and seamless multilingual translation. Built with a decoupled architecture, Voiceflow pairs an asynchronous Node.js and Express backend with a responsive HTML5/CSS3/JavaScript web client.

---

## Key Features

* **Real-Time Audio Processing:** Captures live speech directly from the user's microphone.
* **Instant Multilingual Translation:** Translates input speech into native target languages in real-time.
* **AI Voice Agent:** Provides interactive audio playback and text-to-speech feedback.
* **Decoupled Architecture:** Clean separation between backend API routes and client interface.

---

##  Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Backend:** Node.js, Express.js
* **Environment & Security:** `dotenv` (for API keys and server configuration)
* **Web APIs:** SpeechRecognition & SpeechSynthesis Web APIs

---

##  Repository Structure

```text
Real-time-voice-translator/
│
├── frontend/                  # Web Interface Client
│   ├── index.html             # Application layout and DOM entry point
│   ├── style.css              # Custom styling & responsive layout
│   └── script.js              # Client-side logic, audio capture & API calls
│
├── backend/                   # Node.js Express Server
│   ├── node_modules/          # Backend dependencies
│   ├── .env                   # Environment variables (API Keys, PORT)
│   ├── package.json           # Backend dependency metadata & scripts
│   ├── package-lock.json      # Dependency version lock file
│   └── server.js              # Express server setup and backend routes
│
└── README.md                  # Project documentation
