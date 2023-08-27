import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function RegisterForm() {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [age, setAge] = useState("");
  let postData = (user) => {
    fetch("http://localhost:3000/api/v1/users/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "success") {
          navigate("/login");
        }
      });
  };
  const resetInput = () => {
    setName("");
    setEmail("");
    setPassword("");
    setAge("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      name,
      email,
      password,
      age,
    };
    // call server ----> send data
    postData(user);
    resetInput();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button>Register</button>
      </form>
      <div>
        <lottie-player
          src="https://lottie.host/a01e6750-461b-4b4a-8d1e-a0600638560b/N3nQuro5zb.json"
          background="#FFFFFF"
          speed="2"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
      </div>
    </div>
  );
}
