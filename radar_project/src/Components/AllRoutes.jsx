import React from "react";
import { Routes, Route } from "react-router-dom";
import DevTools from "../Pages/DevTools";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import MarketingHub from "../Pages/MarketingHub";
import Pricing from "../Pages/Pricing";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/marketing" element={<MarketingHub />} />
        <Route path="/developer" element={<DevTools />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
