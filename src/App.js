import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Suggestion from "./Suggestion";
import Profile from "./Profile";
import "./App.css";

import Login from "./Login";
import Register from "./Register";

function App() {

  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
    );
  }

  return (
    <div className="d-flex vh-100">

      {/* Sidebar */}
      <div className="w-25">
        <Sidebar />
      </div>

      {/* Middle content */}
      <div className="w-50">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>

      {/* Suggestions */}
      <div className="w-25">
        <Suggestion />
      </div>

    </div>
  );
}

export default App;