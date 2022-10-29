import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginJJY from "../components/LoginJJY";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginJJY />} />
        {/* <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
