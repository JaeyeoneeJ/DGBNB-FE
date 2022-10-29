import React, { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout.jsx";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import SignupJJY from "../components/SignupJJY";
import SignupSecond from "../components/SignupSecond";
import SignupThird from "../components/SignupThird";
import SignupForth from "../components/SignupForth";

const HomePage = () => {
  const [onShowSignup, setOnShowSignup] = useState(false);

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
  }

  return (
    <>
      {onShowSignup && viewLogin}
      <Header onShowSignup={onShowSignup} setOnShowSignup={setOnShowSignup} />
      <NavBar />

      <Layout>
        <Home />
      </Layout>
    </>
  );
};
export default HomePage;
