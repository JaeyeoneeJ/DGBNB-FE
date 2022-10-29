import React, { useEffect, useRef, useState } from "react";
import { __postSignup } from "../redux/modules/signupSlice";
import { getItems } from "../redux/modules/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import Button from "./elements/Button";

const SignupThird = ({ onShowSignup, setOnShowSignup, setSignupMode }) => {
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
  // return (
  //   <div>
  //     <input type="file" accept="image/*" ref={fileRef} required />
  //     <button onClick={onClickHandler}>끝</button>
  //   </div>
  // );

  return (
    <BGBlack>
      <Ctn ref={modalRef}>
        <LoginCtn>
          <CloseBtn onClick={() => setOnShowSignup(false)}>
            <GrClose size={16} />
          </CloseBtn>
          <LoginHeader></LoginHeader>
          <LoginBody>
            <LoginContent>
              <SelectNotice>
                <span>에어비앤비 커뮤니티 차별반대 서약</span>
              </SelectNotice>
              <WelcomeText>
                에어비앤비는 누구나 어디에서나 우리 집처럼 편안함을 느낄 수 있는
                커뮤니티를 지향합니다.
              </WelcomeText>
              <SelectNotice>
                <span>이를 위해 다음에 동의해 주실 것을 부탁드립니다.</span>
              </SelectNotice>

              <SelectNotice>
                <span>
                  인종, 종교, 출신, 국가, 민족, 피부색, 장애, 성별, 성 정체성,
                  성적 지향, 연령 등과 관계없이 에어비앤비 커뮤니티의 모든
                  사람을 존중하며 편견이나 선입견 없이 대하는 것에 동의합니다.
                </span>
                <TagA href="#">더 알아보기</TagA>
              </SelectNotice>
              <Button
                onClick={() => {
                  setSignupMode("FORTH");
                }}
                background="linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)"
                bgColor="#ff385c"
                color="white"
                border="none"
                fontSize="16px"
                width="100%"
                padding="14px"
              >
                동의 및 계속하기
              </Button>
              <Button
                // onClick={#}
                background="linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)"
                bgColor="#fffff"
                border="1px solid gray"
                color="white"
                fontSize="16px"
                width="100%"
                padding="14px"
              >
                거절하기
              </Button>
            </LoginContent>
          </LoginBody>
        </LoginCtn>
      </Ctn>
    </BGBlack>
  );
};

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
  gap: 10px;
`;
const WelcomeText = styled.h3`
  margin: 10px 0 20px 0;
  font-size: 20px;
  font-weight: 600;
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
  margin-bottom: 10px;
`;
const TagA = styled.a`
  text-decoration: underline;
  font-weight: 600;
  color: inherit;
`;

const OrLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;
const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
  border: none;
`;
const Or = styled.p`
  min-width: 50px;
  color: #717171;
  font-size: 10px;
  text-align: center;
`;
const LoginFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 24px;
`;
const FlexRowBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ImgTag = styled.img`
  background-color: white;
  width: auto;
  height: 20px;
`;
const FooterText = styled.p`
  width: 100%;
  font-weight: 600;
`;

export default SignupThird;
