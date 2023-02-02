import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Navbar from "./pages/Home/index.js";
import Houses from "./pages/Houses/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<div>Dashboard</div>} />
          <Route path="/create" element={<Navbar />} />
          <Route path="/home" element={<Houses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
