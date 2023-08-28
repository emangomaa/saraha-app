import { useState, useEffect } from "react";
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import Messages from "./Messages";
export default function ProfilePage({ updateUser }) {
  let [url, setUrl] = useState("");
  let [user, setUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/users/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "success") {
          handleUser(res.user);
        }
      });
  });
  const handleUrl = () => {
    setUrl(`http://localhost:3001/sendMessage/${user._id}`);
  };
  const handleUser = (user) => {
    setUser((prev) => ({ ...prev, ...user }));
    updateUser(user);
  };
  return (
    <div className="profile">
      <AiOutlineUser className="user" />
      <h3>{user.name}</h3>
      <button onClick={handleUrl}>
        {" "}
        <BiShareAlt className="fs-3 fw-bold" /> Share Account
      </button>
      <textarea
        rows={4}
        className={url.length === 0 ? "d-none" : "d-block"}
        value={url}
        onChange={handleUrl}
      ></textarea>
      <Messages />
    </div>
  );
}
