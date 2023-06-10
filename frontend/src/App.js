import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/index.js";
import Houses from "./pages/Houses/index";
import Navbar from "./components/Navbar";
import BelongingsAdvertForm from "./pages/AdvertForm/BelongingsAdvertForm";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<div>Dashboard</div>} />
          <Route path="/create" element={<Houses />} />
          <Route path="/home" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/belongings-advert-form" element={<BelongingsAdvertForm/>}/>
          <Route path="/user/:userId" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
