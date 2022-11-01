import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupJJY from "../components/SignupJJY";
import DetailAccPage from "../pages/DetailAccPage";
import HomePage from "../pages/HomePage";
import PostAccommodation from "../components/HostingAccommodation";
import Login from "../components/Login";
import UserProfile from "../components/UserProfile";
import UserProfileHosting from "../components/UserProfileHosting";
import UserProfileReservation from "../components/UserProfileReservation";
import Login from "../components/Login";
import SignupSecond from "../components/SignupSecond";
import SignupThird from "../components/SignupThird";
import SignupForth from "../components/SignupForth";
import SignupFifth from "../components/SginupFifth";
import { useDispatch } from "react-redux";
import Header from "../components/Header";

const Router = () => {
  const [onShowSignup, setOnShowSignup] = useState(false);
  const [onShowLogin, setOnShowLogin] = useState(false);
  console.log(onShowLogin);
  const dispatch = useDispatch();

  /// 모드에 따라 렌더링 모달이 달라진다.
  const [signupMode, setSignupMode] = useState("FIRST");

  let viewSignup = null;
  if (signupMode === "FIRST") {
    viewSignup = (
      <SignupJJY
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        setSignupMode={setSignupMode}
      />
    );
  } else if (signupMode === "SECOND") {
    viewSignup = (
      <SignupSecond
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        setSignupMode={setSignupMode}
      />
    );
  } else if (signupMode === "THIRD") {
    viewSignup = (
      <SignupThird
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        setSignupMode={setSignupMode}
      />
    );
  } else if (signupMode === "FORTH") {
    viewSignup = (
      <SignupForth
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        setSignupMode={setSignupMode}
      />
    );
  } else if (signupMode === "FIFTH") {
    viewSignup = (
      <SignupFifth
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        setSignupMode={setSignupMode}
      />
    );
  }

  return (
    <BrowserRouter>
      {onShowSignup && viewSignup}
      {onShowLogin && (
        <Login onShowLogin={onShowLogin} setOnShowLogin={setOnShowLogin} />
      )}
      <Header
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        onShowLogin={onShowLogin}
        setOnShowLogin={setOnShowLogin}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
