import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getItems } from "../redux/modules/signupSlice";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import Button from "./elements/Button";

const SignupSecond = ({ onShowSignup, setOnShowSignup, setSignupMode }) => {
  const dispatch = useDispatch();
  const nicknameRef = useRef();
  const nameRef = useRef();
  const phoneNumRef = useRef();
  const passwordRef = useRef();

  const XButtonOnClick = () => {
    setOnShowSignup(false);
    setSignupMode("FIRST");
  };

  const onClickHandler = () => {
    const secondItems = {
      nickname: nicknameRef.current.value,
      name: nameRef.current.value,
      phoneNum: phoneNumRef.current.value,
      password: passwordRef.current.value,
    };
    setSignupMode("THIRD");
    dispatch(getItems(secondItems));
    // console.log(secondItems);
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
              <SelectArea>
                <SelectText
                  className={isActive ? "Active" : ""}
                  htmlFor="email"
                >
                  이름
                </SelectText>
                <SelectInput
                  type="email"
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder="(예: 길동)"
                  ref={nameRef}
                />
              </SelectArea>
              <SelectNotice>
                <span>
                  정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
                </span>
              </SelectNotice>

              <SelectArea>
                <SelectText
                  className={isActive ? "Active" : ""}
                  htmlFor="email"
                >
                  닉네임
                </SelectText>
                <SelectInput
                  type="email"
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder="(예: Jain)"
                  ref={nicknameRef}
                />
              </SelectArea>
              <SelectNotice>
                <span>사용하실 닉네임을 입력해주세요.</span>
              </SelectNotice>

              <SelectArea>
                <SelectText
                  className={isActive ? "Active" : ""}
                  htmlFor="email"
                >
                  전화번호
                </SelectText>
                <SelectInput
                  type="text"
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder="010-XXXX-XXXX"
                  ref={phoneNumRef}
                />
              </SelectArea>

              <SelectNotice>
                <span>전화번호를 입력해주세요</span>
              </SelectNotice>

              <SelectArea>
                <SelectText
                  className={isActive ? "Active" : ""}
                  htmlFor="email"
                >
                  비밀번호
                </SelectText>
                <SelectInput
                  type="password"
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder=""
                  ref={passwordRef}
                />
              </SelectArea>

              <SelectNotice>
                <span>사용하실 비밀번호를 입력해주세요.</span>
              </SelectNotice>
              <OrLine>
                <Line />
              </OrLine>
              <SelectNotice>
                <CheckArea>
                  <div>개인정보 수집 및 이용에 동의합니다.</div>
                  <CheckBox type="checkbox" />
                </CheckArea>

                <CheckDesc>
                  1. 당근비앤비가 수집하는 개인 정보 당근비앤비 플랫폼을
                  이용하는 데 필요한 정보 당사는 회원님이 당근비앤비 플랫폼을
                  이용할 때 회원님의 개인 정보를 수집합니다. 그렇지 않은 경우,
                  당근비앤비는 요청하신 서비스를 회원님께 제공하지 못할 수
                  있습니다. 이러한 정보에는 다음이 포함됩니다.
                </CheckDesc>
                <TagA href="#">더보기</TagA>

                <CheckArea>
                  <div>마케팅 이메일 수신을 원합니다(선택).</div>
                  <CheckBox type="checkbox" />
                </CheckArea>

                <CheckDesc>
                  당근비앤비 회원 전용 할인, 추천 여행 정보, 마케팅 이메일, 푸시
                  알람을 보내드립니다. 계정 설정 또는 마케팅 알림에서 언제든지
                  수신을 거부할 수 있습니다.
                </CheckDesc>
                <TagA href="#">더보기</TagA>
              </SelectNotice>
              <OrLine>
                <Line />
              </OrLine>
              <SelectNotice>
                <FooterDesc>
                  동의 및 계속하기를 선택하여 당근비앤비
                  <TagABlue href="#">서비스 약관</TagABlue>,
                  <TagABlue href="#">결제 서비스 약관</TagABlue>,
                  <TagABlue href="#">위치기반 서비스 이용약관</TagABlue>
                  <TagABlue href="#">차별 금지 정책</TagABlue>,
                  <TagABlue href="#">개인정보 처리 방침</TagABlue>에 동의합니다.
                </FooterDesc>
              </SelectNotice>
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
                동의 및 계속하기
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

const CheckDesc = styled.span`
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

export default SignupSecond;
