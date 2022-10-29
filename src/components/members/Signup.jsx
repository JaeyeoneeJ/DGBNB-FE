import React, { useState } from "react";
import SignupJJY from "../SignupJJY";
import SignupFirst from "./SignupFirst";
import SignupSecond from "../SignupSecond";
import SignupThird from "../SignupThird";

const Signup = () => {
  const [signupMode, setSignupMode] = useState("FIRST");

  let viewLogin = null;
  if (signupMode === "FIRST") {
    viewLogin = <SignupJJY setSignupMode={setSignupMode} />;
  } else if (signupMode === "SECOND") {
    viewLogin = <SignupSecond setSignupMode={setSignupMode} />;
  } else if (signupMode === "THIRD") {
    viewLogin = <SignupThird setSignupMode={setSignupMode} />;
  }
  return <>{viewLogin}</>;
};

export default Signup;
