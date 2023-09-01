import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "../validation";
export default function RegisterForm() {
  let navigate = useNavigate();
  let [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  let [errors, setErrors] = useState({});
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

  const handleInput = (e) => {
    let newObj = { ...inputValues, [e.target.name]: e.target.value };
    setInputValues(newObj);
  };
  const resetInput = () => {
    setInputValues({ name: "", email: "", password: "", age: "" });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    setErrors(validation(inputValues));
    // post data to server
    postData(inputValues);
    resetInput();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={inputValues.name}
          name="name"
          onChange={handleInput}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <input
          type="text"
          placeholder="Email"
          value={inputValues.email}
          name="email"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Password"
          value={inputValues.password}
          name="password"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Age"
          value={inputValues.age}
          name="age"
          onChange={handleInput}
        />
        <button>Register</button>
      </form>
      <div className="lottie-player">
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
