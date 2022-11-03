import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineIdcard, AiOutlineNotification, AiOutlineEye, AiOutlineGift } from "react-icons/ai";
import { HiOutlineHome, HiOutlineCash } from "react-icons/hi";
import { BsToggles } from "react-icons/bs";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";

const AccountSetting = () => {
    const nickname = localStorage.getItem("nickname");
    const memberEmail = localStorage.getItem("memberEmail");
    const navigate = useNavigate();
    return (
        <Ctn>
            <AccountHeader>
                <AccountText>계정</AccountText>
                <FlexRow>
                    <AccountDesc>
                        <strong>{nickname},</strong> {memberEmail} · <AccountDescGo>프로필로 이동</AccountDescGo>
                    </AccountDesc>
                </FlexRow>
            </AccountHeader>
            <AccountBoxWrap>
                <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
                    <AiOutlineIdcard size={40}/>
                    <div>
                        <BoxTitle>개인정보</BoxTitle>
                        <BoxContent>개인정보 및 연락처를 알려주세요.</BoxContent>
                    </div>
                </AccountBox>
                <AccountBox
                    onClick={() => navigate("/account-setting/myhostinglist")}
                >
                    <HiOutlineHome size={40}/>
                    <div>
                        <BoxTitle>내 호스팅 정보</BoxTitle>
                        <BoxContent>내 호스팅 정보를 한눈에 확인하세요.</BoxContent>
                    </div>
                </AccountBox>
                <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
                    <HiOutlineCash size={40}/>
                    <div>
                        <BoxTitle>결제 및 대금 수령</BoxTitle>
                        <BoxContent>
                            결제, 대금 수령, 쿠폰, 기프트카드 및 세금 검토하기
                        </BoxContent>
                    </div>
                </AccountBox>
                <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
                    <AiOutlineNotification size={40}/>
                    <div>
                        <BoxTitle>알림</BoxTitle>
                        <BoxContent>알림 환경설정 및 연락 방식을 선택하세요.</BoxContent>
                    </div>
                </AccountBox>
                <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
                    <AiOutlineEye size={40}/>
                    <div>
                        <BoxTitle>개인정보 및 공개 설정</BoxTitle>
                        <BoxContent>
                            연결된 앱, 공유하는 정보 및 공개 대상 관리하기
                        </BoxContent>
                    </div>
                </AccountBox>
                <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
                    <BsToggles size={40}/>
                    <div>
                        <BoxTitle>글로벌 환경 설정</BoxTitle>
                        <BoxContent>기본 언어, 통화, 시간대 설정하기</BoxContent>
                    </div>
                </AccountBox>
                <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
                    <MdOutlineBusinessCenter size={40}/>
                    <div>
                        <BoxTitle>출장</BoxTitle>
                        <BoxContent>
                            회사 이메일을 입력하면 출장에서 혜택을 누리실 수 있습니다.
                        </BoxContent>
                    </div>
                </AccountBox>
                <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
                    <VscGraphLine size={40}/>
                    <div>
                        <BoxTitle>전문 호스팅 도구</BoxTitle>
                        <BoxContent>
                            에어비앤비에서 여러 숙소를 관리하신다면 전문 도구를
                            이용해보세요.
                        </BoxContent>
                    </div>
                </AccountBox>
                <AccountBox onClick={() => alert("아직 구현되지 않은 기능입니다")}>
                    <AiOutlineGift size={40}/>
                    <BoxContent>
                        <BoxTitle>추천 크레딧 및 쿠폰</BoxTitle>
                        <BoxContent>
                            추천 크레딧과 쿠폰이 있습니다. 자세히 알아보기
                        </BoxContent>
                    </BoxContent>
                </AccountBox>
            </AccountBoxWrap>
        </Ctn>
    );
};
const Ctn = styled.div`
    margin: 120px auto 0 auto;
    max-width: 1200px;
    width: 100%;
    padding: 0 30px;
    /* @media screen and (max-width: 1100px) {
    } */
`;
const FlexRow = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItem};
  justify-content: ${(props) => props.justifyContent};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};

  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  width: 100%;
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  border-left: ${(props) => props.borderLeft};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  max-height: ${(props) => props.maxHeight};
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
`;
const AccountHeader = styled.div`
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const AccountText = styled.div`
    font-size: 32px;
    font-weight: 600;
`;
const AccountDesc = styled.span`
    font-size: 18px;
    font-weight: 400;
`;

const AccountDescGo = styled.span`
    font-size: 18px;
    text-decoration: underline;
    font-weight: 600;
`;

const AccountBoxWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.7%;
    @media screen and (max-width: 800px){
        gap: 2%;
    }
    @media screen and (max-width: 550px){
        gap: 0%;
    }
`;
const AccountBox = styled.button`
    background-color: white;
    border: none;
    width: 32.2%;
    height: 172px;
    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
    border-radius: 12px;
    line-height: 20.02px;
    text-align: start;
    letter-spacing: normal;
    margin-bottom: 30px;
    padding: 16px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 800px){
        width: 49%;
    }
    @media screen and (max-width: 550px){
        width: 100%;
    }
`;

const BoxTitle = styled.div`
    font-size: 18px;
    font-weight: 400;
`;
const BoxContent = styled.div`
    color: #717171;
    font-size: 14px;
`;
export default AccountSetting;
