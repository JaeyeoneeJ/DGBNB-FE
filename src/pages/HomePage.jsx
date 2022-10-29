import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout.jsx";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};
export default HomePage;
