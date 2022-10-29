import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineX } from "react-icons/hi";

const Login = () => {
  // const [select, setSelect] = useState();
  // const [phoneNum, setPhoneNum] = useState();

  // //핸드폰 번호 유효성 ui
  // const phoneNumValidationContent = null;

  // if (phoneNum !== "유효성") {
  //   phoneNumValidationContent = (
  //     <div>010을 포함하여 11자리의 번호를 입력해주세요.</div>
  //   );
  // } else {
  //   phoneNumValidationContent = <div>유효한 전화번호 입니다.</div>;
  // }

  return (
    <LoginBox>
      <LoginHeader>
        <HeaderFlexBox>
          <HiOutlineX />
        </HeaderFlexBox>
        <HeaderFlexBox>로그인 또는 회원가입</HeaderFlexBox>
        <HeaderFlexBox></HeaderFlexBox>
      </LoginHeader>

      <InputWrap>
        <Welcome>에어비앤비에 오신 것을 환영합니다.</Welcome>
        <DropDownBox
        // value={select}
        // onChange={(e) => {
        //   setSelect(e.target.value);
        // }}
        >
          <option value="">국가</option>
          <option value="dog">1</option>
          <option value="cat">2</option>
          <option value="hamster">3</option>
          <option value="parrot">4</option>
          <option value="spider">5</option>
          <option value="goldfish">6</option>
        </DropDownBox>
        <PhoneNum
          type="text"
          placeholder="전화번호"
          // onChange={(e) => {
          //   setPhoneNum(e.target.value);
          // }}
        />
        <LoginDesc>
          전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
          데이터 요금이 부과됩니다. 개인정보 처리방침
        </LoginDesc>
        <RedButton>계속</RedButton>
        또는
        <Button>페이스북으로 로그인</Button>
        <Button>구글로 로그인</Button>
        <Button>Apple계정으로 계속하기</Button>
        <Button>이메일로 로그인하기</Button>
      </InputWrap>
    </LoginBox>
  );
};

const LoginBox = styled.div`
  width: 569px;
  height: 682px;

  border: 1px solid lightgray;
  border-radius: 20px;
  margin: 100px auto;
`;

const HeaderFlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const LoginHeader = styled.div`
  height: 64px;
  border-bottom: 1px solid lightgray;
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  & div :first-child {
    justify-content: flex-start;
  }
`;

const RedButton = styled.button`
  background-color: #e41d4e;
  font-size: 14px;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  width: 519px;
  height: 48px;
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 23px;
  & Welcome {
  }
`;
const DropDownBox = styled.select`
  display: block;
  width: 519px;
  height: 48px;
  border: 1px solid #afafaf;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const PhoneNum = styled.input`
  display: block;
  width: 519px;
  height: 48px;
  border: 1px solid #afafaf;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 22px 12px;
`;
const Button = styled.button`
  background-color: white;
  border: 1px solid #222222;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  width: 519px;
  height: 48px;
  margin-bottom: 17px;
`;

const Welcome = styled.div`
  margin: 27px 0;
  font-size: 18px;
  font-weight: 600;
`;

const LoginDesc = styled.div`
  margin: 10px 0;
  font-size: 13px;
`;
export default Login;
