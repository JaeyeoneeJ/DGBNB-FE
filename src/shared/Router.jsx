import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupJJY from "../components/SignupJJY";
import DetailAccPage from "../pages/DetailAccPage";
import HomePage from "../pages/HomePage";
import PostAccommodation from "../components/HostingAccommodation";
import UserPofile from "../components/UserPofile";
import Login from "../components/Login";
import SignupSecond from "../components/SignupSecond";
import SignupThird from "../components/SignupThird";
import SignupForth from "../components/SignupForth";
import SignupFifth from "../components/SginupFifth";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import AccountSettingPage from "../pages/AccountSettingPage";

const Router = () => {
  const [onShowSignup, setOnShowSignup] = useState(false);
  const [onShowLogin, setOnShowLogin] = useState(false);
  // console.log(onShowLogin)
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
      {onShowLogin &&
        <Login
          onShowLogin={onShowLogin}
          setOnShowLogin={setOnShowLogin}
      />}
      <Header
        onShowSignup={onShowSignup} setOnShowSignup={setOnShowSignup}
        onShowLogin={onShowLogin} setOnShowLogin={setOnShowLogin}
        />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account-setting/hosting" element={<PostAccommodation />} />
        <Route path="/mypage" element={<UserPofile />} />
        <Route path="/accommodation/:id" element={<DetailAccPage />} />
        <Route path="/account-setting" element={<AccountSettingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
