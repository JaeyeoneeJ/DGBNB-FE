import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import Button from "./elements/Button";
import { __postSignup } from "../redux/modules/signupSlice";

const SignupCheck = ({ onShowSignup, setOnShowSignup, setSignupMode }) => {
  const dispatch = useDispatch();
  const globalUserInfo = useSelector((state) => state.signup.postSignupItems);
  //   console.log("유저정보", globalUserInfo);

  const XButtonOnClick = () => {
    setOnShowSignup(false);
    setSignupMode(false);
  };

  const onClickHandler = () => {
    if (window.confirm("회원가입을 완료하시겠습니까?")) {
      dispatch(__postSignup(globalUserInfo));
      setOnShowSignup(false);
      setSignupMode("FIRST");
    }
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
          <CloseBtn onClick={XButtonOnClick}>
            <GrClose size={16} />
          </CloseBtn>
          <LoginHeader>회원 가입 완료하기</LoginHeader>
          <LoginBody>
            <LoginContent>
              <SelectNotice>
                <strong>입력하신 정보를 확인해주세요</strong>
              </SelectNotice>

              <SelectNotice>
                <CheckText>이메일</CheckText>
                <CheckInfo>{globalUserInfo.memberEmail}</CheckInfo>
              </SelectNotice>
              <SelectNotice>
                <CheckText>이름</CheckText>
                <CheckInfo>{globalUserInfo.name}</CheckInfo>
              </SelectNotice>
              <SelectNotice>
                <CheckText>닉네임</CheckText>
                <CheckInfo>{globalUserInfo.nickname}</CheckInfo>
              </SelectNotice>
              <SelectNotice>
                <CheckText>전화번호</CheckText>
                <CheckInfo>{globalUserInfo.phoneNum}</CheckInfo>
              </SelectNotice>

              <OrLine>
                <Line />
              </OrLine>

              <Button
                onClick={onClickHandler}
                background="linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)"
                // bgColor='#ff385c'
                color="white"
                border="none"
                fontSize="16px"
                width="100%"
                padding="14px"
              >
                완료하기
              </Button>
            </LoginContent>
          </LoginBody>
        </LoginCtn>
      </Ctn>
    </BGBlack>
  );
};
const CheckText = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const CheckInfo = styled.div`
  font-size: 16px;
  border: 1px solid lightgrey;
  margin: 5px 0;
  border-radius: 15px;
  padding: 10px;
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
  box-sizing: border-box;
  /* padding: 10px; */
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
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
  margin: 0;
  padding: 10px 24px;
  justify-content: center;
`;
const LoginContent = styled.div`
  padding: 10px 24px;
  margin: 10px auto 20px auto;
  display: flex;
  flex-direction: column;
`;

const SelectArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  &:focus-within label {
    transform: translate(4px, 12px) scale(0.75);
  }
  & .Active {
    transform: translate(4px, 12px) scale(0.75);
  }
`;

const SelectText = styled.label`
  position: absolute;
  padding: 0 12px;
  color: #717171;
  pointer-events: none;
  transform: translate(4px, 20px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;
const SelectInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 20px 12px 0px 12px;
  outline: 0;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  background: #fff;
  font-size: inherit;
  color: black;
  &::placeholder {
    color: transparent;
  }

  &:focus {
    &::placeholder {
      color: #717171;
    }
  }
`;
const SelectNotice = styled.p`
  font-size: 12px;
  margin: 10px 0;
  color: #717171;
`;
const TagA = styled.a`
  display: block;
  text-decoration: underline;
  font-weight: 700;
  color: inherit;
  margin-bottom: 10px;
`;

const TagABlue = styled(TagA)`
  display: inline;
  color: #4141ff;
`;

const OrLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
  border: none;
`;
const CheckArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  margin-bottom: 7px;
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;

const CheckDesc = styled.div`
  display: block;
  width: 450px;
  text-align: justify;
  font-size: 11px;
  margin-bottom: 10px;
`;

const FooterDesc = styled(CheckDesc)`
  display: block;
  width: 90%;
  text-align: justify;
  font-size: 13px;
`;

export default SignupCheck;
