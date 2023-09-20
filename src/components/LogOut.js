import React from "react";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
export default function LogOut({ updateFlag }) {
  let navigate = useNavigate();
  const logOut = () => {
    fetch("http://localhost:3000/api/v1/users/logOut", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "success") {
          secureLocalStorage.setItem("flag", res.flag);
          updateFlag();
          navigate("/login");
        }
      });
  };
  return (
    <div className="logOut">
      <AiOutlineUser className="user" />
      <h3></h3>
      <button onClick={logOut}>
        {" "}
        <BiLogOut className="fs-3 fw-bold" /> LogOut
      </button>
    </div>
  );
}
