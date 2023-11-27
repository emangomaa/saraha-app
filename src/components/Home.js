// comment
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="homePage">
        <div className="content">
          <h1>Give Your Opinion A New Style !</h1>
          <h3> Send Me A message In Secret. </h3>
          <p>
            Saraha Application Allow you To Create An Account or send a message
            without it.
          </p>
          <button onClick={() => navigate("/register")}>Register Now → </button>
        </div>
        <img className="homeImage" src="assets/logo.jpeg" alt="home" />
      </div>
    </div>
  );
}
