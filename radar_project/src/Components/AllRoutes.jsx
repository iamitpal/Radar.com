import React from "react";
import { Routes, Route } from "react-router-dom";
import DevTools from "../Pages/DevTools";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MarketingHub from "../Pages/MarketingHub";
import Pricing from "../Pages/Pricing";
import Register from "../Pages/Register";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marketing" element={<MarketingHub />} />
        <Route path="/developer" element={<DevTools />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
