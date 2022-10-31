import React, { useState } from "react";
import Header from "../components/Header";
import Layout from "../components/Layout.jsx";
import SignupJJY from "../components/SignupJJY";
import DetailAccommodation from "../components/DetailAccommodation";

const DetailAccPage = () => {
  const [onShowSignup, setOnShowSignup] = useState(false)
  console.log(onShowSignup)
  
  return (
    <>
      {/* {onShowSignup && <SignupJJY
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
      />}
      <Header
        onShowSignup={onShowSignup}
        setOnShowSignup={setOnShowSignup}
      /> */}
      <Layout>
        <DetailAccommodation />
      </Layout>
    </>
  );
};
export default DetailAccPage;
