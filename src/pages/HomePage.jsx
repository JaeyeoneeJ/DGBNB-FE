import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout.jsx";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import SignupJJY from "../components/SignupJJY";
import Login from "../components/Login";
import SignupSecond from "../components/SignupSecond";
import SignupThird from "../components/SignupThird";
import SignupForth from "../components/SignupForth";
import SignupFifth from "../components/SginupFifth";
import { useDispatch, useSelector } from "react-redux";
import { __postAccomodations } from "../redux/modules/accommodationSlice";
import { __postSignup } from "../redux/modules/signupSlice";

const HomePage = () => {
  const [onShowSignup, setOnShowSignup] = useState(false);
  const [onShowLogin, setOnShowLogin] = useState(false);
  const dispatch = useDispatch();

  /// 모드에 따라 렌더링 모달이 달라진다.
  const [signupMode, setSignupMode] = useState("FIRST");

  let viewLogin = null;
  if (signupMode === "FIRST") {
    viewLogin = (
      <SignupJJY
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        setSignupMode={setSignupMode}
      />
    );
  } else if (signupMode === "SECOND") {
    viewLogin = (
      <SignupSecond
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        setSignupMode={setSignupMode}
      />
    );
  } else if (signupMode === "THIRD") {
    viewLogin = (
      <SignupThird
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        setSignupMode={setSignupMode}
      />
    );
  } else if (signupMode === "FORTH") {
    viewLogin = (
      <SignupForth
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        setSignupMode={setSignupMode}
      />
    );
  } else if (signupMode === "FIFTH") {
    viewLogin = (
      <SignupFifth
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        setSignupMode={setSignupMode}
      />
    );
  }

  return (
    <>
      {onShowSignup && viewLogin}
      {onShowLogin && (
        <Login onShowLogin={onShowLogin} setOnShowLogin={setOnShowLogin} />
      )}
      <Header
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
        onShowLogin={onShowLogin}
        setOnShowLogin={setOnShowLogin}
      />
      <NavBar />

      <Layout>
        <Home />
      </Layout>
    </>
  );
};
export default HomePage;
