import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./dist/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SendMessage from "./components/SendMessage";
import ProfilePage from "./components/ProfilePage";
import Settings from "./components/Settings";
import LogOut from "./components/LogOut";
import Home from "./components/Home";
import Verify from "./components/Verify";
import secureLocalStorage from "react-secure-storage";

export default function App() {
  let [user, setUser] = useState({});
  let [flag, setFlag] = useState(Number(secureLocalStorage.getItem("flag")));
  const updateUser = (user) => {
    setUser((prev) => ({ ...prev, ...user }));
  };
  const toggleFlag = () => {
    setFlag(Number(secureLocalStorage.getItem("flag")));
  };
  // if (typeof chrome.app.isInstalled !== "undefined") {
  //   chrome.runtime.sendMessage();
  // }
  return (
    <>
      <Navbar flag={flag} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sendMessage/:id" element={<SendMessage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<LoginForm updateFlag={toggleFlag} />} />
        <Route
          path="/profile"
          element={<ProfilePage updateUser={updateUser} />}
        />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/logOut"
          element={<LogOut user={user} updateFlag={toggleFlag} />}
        />
      </Routes>
      <Footer />
    </>
  );
}
