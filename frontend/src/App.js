import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from './pages/Auth/Register/Register';
import Login from "./pages/Auth/Login/Login";
import Home from "./pages/Home/HomePage.js";
import UserProfile from "./pages/UserProfile/UserProfile";
import BelongingsAdvertDetail from "./pages/AdvertDetail/BelongingsAdvertDetail";
import HouseAdvertDetail from "./pages/AdvertDetail/HouseAdvertDetail";
import HousemateSearchingAdvertDetail from "./pages/AdvertDetail/HousemateSearchingAdvertDetail";
import HousemateWantingAdvertDetail from "./pages/AdvertDetail/HousemateWantingAdvertDetail";
import BelongingsAdvertForm from './pages/AdvertForm/BelongingsAdvertForm'
import HouseAdvertForm from "./pages/AdvertForm/HouseAdvertForm";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/belongings-advert-form" element={<BelongingsAdvertForm/>}/>
          <Route path="/house-advert-form" element={<HouseAdvertForm/>}/>
          <Route path="/belongings-advert/:id" element={<BelongingsAdvertDetail/>}/>
          <Route path="/house-advert/:id" element={<HouseAdvertDetail/>}/>
          <Route path="/housemate-searching-advert/:id" element={<HousemateSearchingAdvertDetail/>}/>
          <Route path="/housemate-wanting-advert/:id" element={<HousemateWantingAdvertDetail/>}/>
          <Route path="/user/:userId" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
