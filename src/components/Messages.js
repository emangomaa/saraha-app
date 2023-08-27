import React from "react";
import { useState, useEffect } from "react";
export default function Messages() {
  let [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/messages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "success") {
          console.log(res.messages);
          setMessages(res.messages);
        }
      });
  }, []);
  return (
    <ul className="messageList">
      {messages.length === 0 ? (
        <p>No Messages</p>
      ) : (
        messages.map((item) => (
          <p key={item._id} className="message">
            {item.messageText}
          </p>
        ))
      )}
    </ul>
  );
}
