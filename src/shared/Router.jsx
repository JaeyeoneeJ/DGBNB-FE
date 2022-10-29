import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../components/members/Signup";
import SignupJJY from "../components/SignupJJY";
import HomePage from "../pages/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<SignupJJY />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
