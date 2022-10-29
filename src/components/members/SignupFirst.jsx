import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../../redux/modules/signupSlice";

const SignupFirst = ({ setSignupMode }) => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const onClickHandler = () => {
    const firstItem = { memberEmail: emailRef.current.value };
    setSignupMode("SECOND");
    dispatch(getItems(firstItem));
    console.log(firstItem);
  };

  return (
    <div>
      <input type="text" placeholder="email" ref={emailRef} required />
      <button onClick={onClickHandler}>다음</button>
    </div>
  );
};

export default SignupFirst;
