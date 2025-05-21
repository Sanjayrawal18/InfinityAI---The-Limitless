# ✍️ **Text-to-Text Generation Web App**

A full-stack web app that leverages the Google Gemini API to generate intelligent responses based on user input. Includes secure user authentication and a mobile-responsive interface.

## 🚀 Features

- Generate text responses using Google Gemini API
- Secure authentication (JWT, bcrypt)
- Fully responsive UI
- Scalable backend with MongoDB

## 🛠 Tech Stack

- Frontend: React.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Auth: JWT, bcrypt
- AI Integration: Google Gemini API

## 🔐 Setup Instructions
 1. Clone repository:
  ```powershell
  git clone https://github.com/your-username/chat-app.git
  ```

2. Install dependencies:

  ```powershell
  cd frontend
  npm install

  cd backend
  npm install
  ```

3. Create a .env file with necessary environment variables (e.g., Cloudinary keys, port).
  ```.env
  GEMINI_AI_SECRET=
  MONGODB_URI=
  JWT_SECRET=
  COOKIE_SECRET=
  PORT=5000
  ```

Start the backend and frontend:

  ```powershell
  cd backend
  npm run dev

  cd frontend
  npm run dev

