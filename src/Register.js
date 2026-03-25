import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch("http://localhost:5000/api/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password,
            confirmpassword
          })
        }
      );

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    }

  };

  return (

    <div className="auth-container">

      <div className="auth-box">
        <h1 className="logo">Instagram</h1>
        <p className="signup-text">
          Sign up to see photos and videos from your friends.
        </p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">
            Sign up
          </button>

        </form>

      </div>

      <div className="auth-footer">
        Have an account?
        <Link to="/"> Log in</Link>
      </div>

    </div>
  );
}

export default Register;