# 📸 Instagram Clone – MERN Stack Project

A full-stack Instagram-style social media web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.
This project includes user authentication, posts feed, stories UI, suggestions panel, and profile navigation similar to Instagram.

---

## 🚀 Features

* User Registration & Login (JWT Authentication)
* Secure Password Hashing using bcrypt
* Protected Routes
* Home Feed with Posts
* Stories Section UI
* Suggestions Panel
* Sidebar Navigation
* Profile Page Routing
* MongoDB Atlas Database Integration
* REST API Backend (Express.js)
* Responsive Layout

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Bootstrap
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt.js

---

## 📂 Folder Structure

```
instagram-clone
│
├── backend
│   ├── Model
│   ├── controllers
│   ├── routes
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   ├── components
│   └── App.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/instagram-clone.git
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file inside backend folder:

```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```
npm start
```

Server runs on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

App runs on:

```
http://localhost:3000
```

---

## 🔐 Authentication Flow

* User registers using email & password
* Password stored securely using bcrypt hashing
* JWT token generated after login
* Token stored in localStorage
* Protected routes accessible only after login

---

## 📡 API Endpoints

### User Routes

```
POST /api/user/register
POST /api/user/login
```

### Post Routes

```
GET /api/post
POST /api/post
```

### Profile Routes

```
GET /api/profile
```

### Suggestions Routes

```
GET /api/suggestion
```

### Story Routes

```
GET /api/story
```

## 🌐 Deployment

Frontend → Vercel
Backend → Render
Database → MongoDB Atlas

---

## 👩‍💻 Author

**Abi**

MERN Stack Developer
