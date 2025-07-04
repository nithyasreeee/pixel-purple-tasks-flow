# 🚀 Pixel Purple - Tasks Flow

A full-stack real-time Todo Task Management Web App built during the Katomaran Full Stack Hackathon. This app helps users manage tasks, share them collaboratively, and experience real-time updates using modern technologies.

---

## 📌 Features

- 🔐 OAuth 2.0 Login with Google
- 📝 Create, Edit, Delete, and View tasks
- 👥 Share tasks with other users by email
- 🔄 Real-time updates using Socket.IO
- 🎯 Filter, sort, and paginate task lists
- 📊 View stats with graphs (completed vs pending tasks)
- 🌓 Dark mode toggle + responsive UI
- 🔔 Toast notifications for actions
- 🧩 Subtasks (optional)
- 📶 Offline fallback support (optional)

---

## 🧠 Assumptions

- Task sharing is done via registered user's email ID.
- All users can edit shared tasks equally (no role restrictions).
- App assumes internet access for login via Google and real-time sync.
- Auth provider used: **Google OAuth** (via Passport.js).
- MongoDB Atlas is used as a managed cloud database.

---

## 🛠 Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- Axios
- React Router DOM
- Socket.io-client
- Recharts

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Passport.js (Google OAuth)
- Socket.IO
- JWT Auth

---

## 🌐 Live Demo

🔗 **Click the link**: (https://pixel-purple-tasks-flow.lovable.app)
---

## 📽️ Loom Video Demo

🎥 [Click here to watch the app demo]()

---

## 🧱 Architecture Diagram

![Architecture Diagram](src/assets/architecture-diagram.png)

---

## 🚀 Getting Started (Local Setup)

1. **Clone the repository**
   ```bash
   git clone https://github.com/nithyasreeee/pixel-purple-tasks-flow.git
   cd pixel-purple-tasks-flow
