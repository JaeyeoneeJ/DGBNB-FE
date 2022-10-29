import React, { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout.jsx";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import SignupJJY from "../components/SignupJJY";

const HomePage = () => {
  const [onShowSignup, setOnShowSignup] = useState(false)
  
  return (
    <>
      {onShowSignup && <SignupJJY
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
      />}
      <Header
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
      />
      <NavBar />
      
      <Layout>
        <Home />
      </Layout>
    </>
  );
};
export default HomePage;
