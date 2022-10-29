import React from "react";
import { useRef } from "react";
import { __postSignup } from "../../redux/modules/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/modules/signupSlice";

const SignupThird = ({ setSignupMode }) => {
  const dispatch = useDispatch();

  const fileRef = useRef();

  const onClickHandler = () => {
    const thirdItems = {
      memberImg: fileRef.current.value,
    };
    setSignupMode(false);
    dispatch(getItems(thirdItems));
    console.log(thirdItems);
  };

  return (
    <div>
      <input type="file" accept="image/*" ref={fileRef} required />
      <button onClick={onClickHandler}>끝</button>
    </div>
  );
};

export default SignupThird;
