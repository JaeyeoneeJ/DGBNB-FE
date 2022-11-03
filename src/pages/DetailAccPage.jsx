import React, { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout.jsx";
import SignupJJY from "../components/SignupJJY";
import DetailAccommodation from "../components/DetailAccommodation";

const DetailAccPage = () => {
  return (
    <>
      <Layout>
        <DetailAccommodation />
      </Layout>
    </>
  );
};
export default DetailAccPage;
