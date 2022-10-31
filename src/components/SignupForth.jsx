import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../redux/modules/signupSlice";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import Button from "./elements/Button";
import logoImg from "../components/airbnb_logo.png";

const SignupForth = ({ onShowSignup, setOnShowSignup, setSignupMode }) => {
  const onClickHandler = () => {
    setSignupMode("FIFTH");
  };

  const XButtonOnClick = () => {
    setOnShowSignup(false);
    setSignupMode("FIRST");
  };

  //// 기존 코드
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const handleTextChange = (text) => {
    setValue(text);
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOnShowSignup(false);
        setSignupMode("FIRST");
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    <BGBlack>
      <Ctn ref={modalRef}>
        <LoginCtn>
          <LoginHeader>
            <CloseBtn onClick={XButtonOnClick}>
              <GrClose size={16} />
            </CloseBtn>
            <span>프로필 생성하기</span>
          </LoginHeader>
          <LoginBody>
            <LoginContent>
              <LogoImg src={logoImg} />
              <WelcomeText>당근비앤비에 오신 것을 환영합니다.</WelcomeText>
              <SelectNotice>
                <span>
                  전 세계 숙소, 현지 레스토랑 및 독특한 체험을 찾아보세요.
                </span>
              </SelectNotice>

              <Button
                onClick={onClickHandler}
                // background="linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)"
                bgColor="#191919"
                color="white"
                border="none"
                fontSize="16px"
                width="100%"
                padding="14px"
              >
                계속
              </Button>
            </LoginContent>
          </LoginBody>
        </LoginCtn>
      </Ctn>
    </BGBlack>
  );
};
const WelcomeText = styled.h3`
  font-size: 25px;
  font-weight: 700;
  margin-top: 7px;
`;

const BGBlack = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: calc(100vh);
  min-width: 300px;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Ctn = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  max-width: 570px;
  min-width: 300px;
  width: 100%;
  overflow: hidden;
  /* border: 1px solid red; */
  @media screen and (max-width: 800px) {
    top: auto;
    bottom: 0;
    margin-bottom: -10px;
    transform: translate(-50%, 0%);
  }
  @media screen and (max-height: 620px) {
    position: relative;
    height: 100%;
    top: 0;
    left: 0;
    transform: translate(0%, 0%);
  }
`;
const LoginBody = styled.div`
  height: 100%;
  overflow-y: auto;
  @media screen and (max-height: 620px) {
    position: relative;
    height: calc(100vh - 40px);
  }
`;
const LoginCtn = styled.div`
  background-color: white;
  position: relative;
  border: 1px solid #ebebeb;
  border-radius: 10px;
`;
const CloseBtn = styled.div`
  display: flex;
  top: 8px;
  left: 12px;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
  background-color: inherit;
  border-radius: 50%;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    background-color: #ebebeb;
    transform: rotate(-90deg);
  }
`;
const LoginHeader = styled.h3`
  display: flex;
  font-size: 16px;
  border-bottom: 1px solid #ebebeb;
  margin: 0;
  padding: 10px 24px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;
const LoginContent = styled.div`
  padding: 10px 24px;
  margin: 10px auto 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const SelectNotice = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #717171;
`;

const LogoImg = styled.img`
  width: 60px;
  margin: 10px 0;
`;

export default SignupForth;
