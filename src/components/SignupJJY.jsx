import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { GrClose } from "react-icons/gr";
import Button from './elements/Button';

const SignupJJY = ({ onShowSignup, setOnShowSignup }) => {
    const [isActive, setIsActive] = useState(false)
    console.log(onShowSignup)
    const [value, setValue] = useState('')
    const handleTextChange = (text) => {
        setValue(text)
        if (text !== '') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

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
        document.addEventListener('mousedown', handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응
        
        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });
    
    return (
        <BGBlack>
            <Ctn ref={modalRef}>
                <LoginCtn>
                    <CloseBtn onClick={() => setOnShowSignup(false)}><GrClose size={16} /></CloseBtn>
                    <LoginHeader>
                        회원 가입
                    </LoginHeader>
                    <LoginBody>
                        <LoginContent>
                            <WelcomeText>당근비앤비에 오신 것을 환영합니다.</WelcomeText>
                            <SelectArea>
                                <SelectText
                                    className={isActive ? "Active" : ""}
                                    htmlFor='email'
                                >
                                    E-mail
                                </SelectText>
                                <SelectInput
                                    type="email"
                                    value={value}
                                    onChange={e => handleTextChange(e.target.value)}
                                    placeholder='xxx@xxxxx.com'
                                />
                            </SelectArea>
                            <SelectNotice>
                                <span>전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다. </span>
                                <TagA href='#'>개인정보 처리방침</TagA>
                            </SelectNotice>
                            <Button
                                // onClick={#}
                                background='linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)'
                                // bgColor='#ff385c'
                                color='white'
                                border='none'
                                fontSize='16px'
                                width='100%'
                                padding='14px'
                            >
                                계속
                            </Button>
                        </LoginContent>
                        <OrLine>
                            <Line />
                            <Or>또는</Or>
                            <Line />
                        </OrLine>
                        <LoginFooter>
                            <Button
                                fontSize='12px'
                                width='100%'
                                padding='14px 20px'
                            >
                                <FlexRowBetween>
                                    <ImgTag src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt="facebook" />
                                    <FooterText>페이스북으로 로그인하기</FooterText>
                                </FlexRowBetween>
                            </Button>
                            <Button
                                fontSize='12px'
                                width='100%'
                                padding='14px 20px'
                            >
                                <FlexRowBetween>
                                    <ImgTag src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="google" />
                                    <FooterText>구글로 로그인하기</FooterText>
                                </FlexRowBetween>
                            </Button>
                            <Button
                                fontSize='12px'
                                width='100%'
                                padding='14px 20px'
                            >
                                <FlexRowBetween>
                                    <ImgTag src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="apple" />
                                    <FooterText>Apple 계정으로 로그인하기</FooterText>
                                </FlexRowBetween>
                            </Button>
                            <Button
                                fontSize='12px'
                                width='100%'
                                padding='14px 20px'
                            >
                                <FlexRowBetween>
                                    <ImgTag src="https://cdn4.iconfinder.com/data/icons/simplicity-vector-icon-set/512/mail.png" alt="e-mail" />
                                    <FooterText>이메일로 로그인하기</FooterText>
                                </FlexRowBetween>
                            </Button>
                        </LoginFooter>
                    </LoginBody>
                </LoginCtn>
            </Ctn>
        </BGBlack>
    )
}

const BGBlack = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: calc(100vh);
    min-width: 300px;
    background-color: rgba(0,0,0,0.5);
`
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
    @media screen and (max-width:800px) {
        top: auto;
        bottom: 0;
        margin-bottom: -10px;
        transform: translate(-50%, 0%);
    }
    @media screen and (max-height:620px) {
        position: relative;
        height: 100%;
        top: 0;
        left: 0;
        transform: translate(0%, 0%);
    }
`
const LoginBody = styled.div`
    height: 100%;
    overflow-y: auto;
    @media screen and (max-height:620px) {
        position: relative;
        height: calc(100vh - 40px);
    }
`
const LoginCtn = styled.div`
    background-color: white;
    position: relative;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    /* padding: 10px; */
`
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
`
const LoginHeader = styled.h3`
    display: flex;
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ebebeb;
    margin: 0;
    padding: 10px 24px;
    justify-content: center;
`
const LoginContent = styled.div`
    padding: 10px 24px;
    margin: 10px auto 20px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const WelcomeText = styled.h3`
    margin: 10px 0 20px 0;
    font-size: 20px;
    font-weight: 600;
`
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
`
const SelectText = styled.label`
    position: absolute;
    padding: 0 12px;
    color: #717171;
    pointer-events: none;
    transform: translate(4px, 20px) scale(1);
    transform-origin: top left;
    transition: all 0.2s ease-out;
`
const SelectInput = styled.input`
    width: 100%;
    height: 56px;
    padding: 20px 12px 0px 12px;
    outline: 0;
    border: 1px solid #B0B0B0;
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
`
const SelectNotice = styled.p`
    font-size: 12px;
    margin-bottom: 10px;
`
const TagA = styled.a`
    text-decoration: underline;
    font-weight: 600;
    color: inherit;
`

const OrLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`
const Line = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #ebebeb;
    border: none;
`
const Or = styled.p`
    min-width: 50px;
    color: #717171;
    font-size: 10px;
    text-align: center;
`
const LoginFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px 24px;
`
const FlexRowBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const ImgTag = styled.img`
    background-color: white;
    width: auto;
    height: 20px;
`
const FooterText = styled.p`
    width: 100%;
    font-weight: 600;
`

export default SignupJJY