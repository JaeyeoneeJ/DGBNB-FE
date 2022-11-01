import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupJJY from "../components/SignupJJY";
import DetailAccPage from "../pages/DetailAccPage";
import HomePage from "../pages/HomePage";
import PostAccommodation from "../components/HostingAccommodation";
import Login from "../components/Login";
import UserProfile from "../components/UserProfile";
import UserProfileHosting from "../components/UserProfileHosting";
import UserProfileReservation from "../components/UserProfileReservation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupJJY />} />
        <Route path="/accommodation" element={<PostAccommodation />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/mypage" element={<UserProfile />} />
        <Route
          path="/mypage/myreservation/:id"
          element={<UserProfileReservation />}
        />
        <Route path="/mypage/myhosting/:id" element={<UserProfileHosting />} />
        <Route path="/accommodation/:id" element={<DetailAccPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
