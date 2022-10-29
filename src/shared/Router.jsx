import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginJJY from "../components/members/LoginJJY";
import Signup from "../components/members/Signup";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<LoginJJY />} /> */}
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
