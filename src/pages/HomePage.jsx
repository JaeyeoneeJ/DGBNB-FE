import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout.jsx";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};
export default HomePage;
