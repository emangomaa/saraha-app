import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ updateFlag }) {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let logIn = (user) => {
    fetch("http://localhost:3000/api/v1/users/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "success") {
          localStorage.setItem("token", res.token);
          localStorage.setItem("flag", res.flag);
          updateFlag();
          navigate("/profile");
        }
      });
  };
  const resetInput = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email,
      password,
    };
    logIn(user);
    resetInput();
  };
  return (
    <div className="form" onSubmit={handleSubmit}>
      <form>
        <h2>LogIn</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>LogIn</button>
      </form>
    </div>
  );
}
