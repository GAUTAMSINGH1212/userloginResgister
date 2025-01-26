import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./index.css";
import Home from "./components/websitepage/Home.js";
import Product from "./components/websitepage/Products";
import Dashboard from "./components/userdashboardlayout/Dashboard.js";
import ProfilePage from "./components/userdashboardlayout/Profile.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exit element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
