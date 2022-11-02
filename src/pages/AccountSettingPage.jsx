import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";

const AccountSettingPage = () => {
  const nickname = localStorage.getItem("nickname");
  const memberEmail = localStorage.getItem("memberEmail");
  const navigate = useNavigate();
  return (
    <Layout>
      <Ctn>
        <AccountHeader>
          <AccountText>계정</AccountText>
          <AccountDesc>{nickname},</AccountDesc>
          <AccountDesc> {memberEmail} </AccountDesc>
          <AccountDescGo> 프로필로 이동</AccountDescGo>
        </AccountHeader>
        <AccountBoxWrap>
          <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
            <div></div>
            <div>
              <BoxTitle>개인정보</BoxTitle>
              <BoxContent>개인정보 및 연락처를 알려주세요.</BoxContent>
            </div>
          </AccountBox>
          <AccountBox
            onClick={() => navigate("/account-setting/myhostinglist")}
          >
            <div></div>
            <div>
              <BoxTitle>내 호스팅 정보</BoxTitle>
              <BoxContent>내 호스팅 정보를 한눈에 확인하세요.</BoxContent>
            </div>
          </AccountBox>
          <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
            <div></div>
            <div>
              <BoxTitle>결제 및 대금 수령</BoxTitle>
              <BoxContent>
                결제, 대금 수령, 쿠폰, 기프트카드 및 세금 검토하기
              </BoxContent>
            </div>
          </AccountBox>
        </AccountBoxWrap>
        <AccountBoxWrap>
          <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
            <div></div>
            <div>
              <BoxTitle>알림</BoxTitle>
              <BoxContent>알림 환경설정 및 연락 방식을 선택하세요.</BoxContent>
            </div>
          </AccountBox>
          <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
            <div></div>
            <div>
              <BoxTitle>개인정보 및 공개 설정</BoxTitle>
              <BoxContent>
                연결된 앱, 공유하는 정보 및 공개 대상 관리하기
              </BoxContent>
            </div>
          </AccountBox>
          <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
            <div></div>
            <div>
              <BoxTitle>글로벌 환경 설정</BoxTitle>
              <BoxContent>기본 언어, 통화, 시간대 설정하기</BoxContent>
            </div>
          </AccountBox>
        </AccountBoxWrap>
        <AccountBoxWrap>
          <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
            <div></div>
            <div>
              <BoxTitle>출장</BoxTitle>
              <BoxContent>
                회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다.
              </BoxContent>
            </div>
          </AccountBox>
          <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
            <div></div>
            <div>
              <BoxTitle>전문 호스팅 도구</BoxTitle>
              <BoxContent>
                에어비앤비에서 여러 숙소를 관리하신다면 전문 도구를
                이용해보세요.
              </BoxContent>
            </div>
          </AccountBox>
          <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
            <div></div>
            <BoxContent>
              <BoxTitle>추천 크레딧 및 쿠폰</BoxTitle>
              <BoxContent>
                추천 크레딧과 쿠폰이 있습니다. 자세히 알아보기
              </BoxContent>
            </BoxContent>
          </AccountBox>
        </AccountBoxWrap>
      </Ctn>
    </Layout>
  );
};
const AccountHeader = styled.div`
  margin-bottom: 60px;
  margin-left: 10px;
  letter-spacing: normal;
`;
const AccountText = styled.div`
  font-size: 32px;
  font-weight: 500;
`;
const AccountDesc = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-top: 7px;
`;

const AccountDescGo = styled.span`
  font-size: 18px;
  text-decoration: underline;
  font-weight: 700;
`;
const Ctn = styled.div`
  margin: 120px auto 0 auto;
  height: 250vh;
  padding: 0 56px;
  /* @media screen and (max-width: 1100px) {
  } */
`;
const AccountBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  padding: 16px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BoxTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
`;
const BoxContent = styled.div`
  color: #717171;
  font-size: 14px;
`;
export default AccountSettingPage;
