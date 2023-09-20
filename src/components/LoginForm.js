import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import validation from "../validation";
export default function LoginForm({ updateFlag }) {
  let navigate = useNavigate();
  let [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  let [errors, setErrors] = useState({});
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
          secureLocalStorage.setItem("flag", res.flag);
          updateFlag();
          navigate("/profile");
          resetInput();
        }
      });
  };
  const resetInput = () => {
    setInputValues({ email: "", password: "" });
  };
  const handleChange = (e) => {
    let newObj = { ...inputValues, [e.target.name]: e.target.value };
    setInputValues(newObj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(inputValues));
    logIn(inputValues);
  };
  return (
    <div className="form" onSubmit={handleSubmit}>
      <form>
        <h2>LogIn</h2>
        <input
          type="text"
          placeholder="Email"
          value={inputValues.email}
          name="email"
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        <input
          type="text"
          placeholder="Password"
          value={inputValues.password}
          name="password"
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        <button>LogIn</button>
      </form>
    </div>
  );
}
