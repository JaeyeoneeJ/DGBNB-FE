import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupJJY from "../components/SignupJJY";
import DetailAccPage from "../pages/DetailAccPage";
import HomePage from "../pages/HomePage";
import PostAccomodation from "../components/HostingAccomodation";
import Login from "../components/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupJJY />} />
        <Route path="/accomodation" element={<PostAccomodation />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/accommodation/:id" element={<DetailAccPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
