import React, { useState } from "react";

export default function SendMessage() {
  let [messageText, setMessageText] = useState("");
  let id = window.location.href.split("/")[4];

  const sendMessage = (data) => {
    fetch("http://localhost:3000/api/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === "success") {
          alert("messages added");
        }
      });
  };

  const handleMessage = (e) => {
    e.preventDefault();
    const data = {
      messageText,
      receivedId: id,
    };
    sendMessage(data);
    resetInput();
  };

  const resetInput = () => {
    setMessageText("");
  };
  return (
    <div className="form">
      <form onSubmit={handleMessage}>
        <h3>Send A Message In Secret To</h3>
        <textarea
          cols={5}
          rows={5}
          placeholder="Type Your Message Here"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}
