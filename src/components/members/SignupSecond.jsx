import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../../redux/modules/signupSlice";

const SignupSecond = ({ setSignupMode }) => {
  const dispatch = useDispatch();
  const nicknameRef = useRef();
  const nameRef = useRef();
  const phoneNumRef = useRef();
  const passwordRef = useRef();

  const onClickHandler = () => {
    const secondItems = {
      nickname: nicknameRef.current.value,
      name: nameRef.current.value,
      phoneNum: phoneNumRef.current.value,
      password: passwordRef.current.value,
    };
    setSignupMode("THIRD");
    dispatch(getItems(secondItems));
    console.log(secondItems);
  };
  return (
    <>
      <input type="text" placeholder="nickname" ref={nicknameRef} />
      <input type="text" placeholder="name" ref={nameRef} />
      <input type="text" placeholder="phoneNum" ref={phoneNumRef} />
      <input type="text" placeholder="password" ref={passwordRef} />
      <button onClick={onClickHandler}>계속</button>
    </>
  );
};

export default SignupSecond;
