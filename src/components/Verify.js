import React from "react";
import { useNavigate } from "react-router-dom";
export default function Verify() {
  let navigate = useNavigate();

  return (
    <div className="verify">
      <h3>Email Verified Successfully</h3>
      <button onClick={() => navigate("/login")}>LogIn</button>
    </div>
  );
}
