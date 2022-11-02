import React from "react";
import styled from "styled-components";
const AccountSettingPage = () => {
  // const userName = localStorage.getItem("name");
  // const userImail = localStorage.getItem();
  return (
    <Ctn>
      <AccountHeader>
        <AccountText>계정</AccountText>
        <AccountDesc></AccountDesc>
        <strong> 프로필로 이동</strong>
      </AccountHeader>
      <AccountBoxWrap>
        <AccountBox></AccountBox>
        <AccountBox></AccountBox>
        <AccountBox></AccountBox>
      </AccountBoxWrap>
      <AccountBoxWrap>
        <AccountBox></AccountBox>
        <AccountBox></AccountBox>
        <AccountBox></AccountBox>
      </AccountBoxWrap>
      <AccountBoxWrap>
        <AccountBox></AccountBox>
        <AccountBox></AccountBox>
        <AccountBox></AccountBox>
      </AccountBoxWrap>
    </Ctn>
  );
};
const AccountHeader = styled.div``;
const AccountText = styled.div``;
const AccountDesc = styled.div``;
const Ctn = styled.div`
  margin-top: 120px;
  padding: 0 30px;
`;
const AccountBoxWrap = styled.div`
  padding: 0 100px;
  display: flex;
`;
const AccountBox = styled.button`
  background-color: white;
  border: none;
  width: 344px;
  height: 172px;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
  border-radius: 12px;
  line-height: 20.02px;
  text-align: start;
  letter-spacing: normal;
  margin: 8px;
  cursor: pointer;
`;
export default AccountSettingPage;
