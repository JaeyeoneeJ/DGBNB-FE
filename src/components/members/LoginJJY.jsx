import React from 'react'
import styled from 'styled-components'
import { GrClose } from "react-icons/gr";

const LoginJJY = () => {
  return (
    <Ctn>
        LoginJJY
        <LoginCtn>
            <CloseBtn><GrClose size={16} /></CloseBtn>
            <LoginHeader>
                로그인 또는 회원 가입
            </LoginHeader>
            <LoginContent>
                <p>당근비앤비에 오신 것을 환영합니다.</p>
                <SelectArea>
                    <SelectBox name="country">
                        <option value="그리스">그리스 (+30)</option>
                        <option value="미국">미국 (+1)</option>
                        <option value="브라질">브라질 (+55)</option>
                        <option value="싱가포르">싱가포르 (+65)</option>
                        <option value="영국">영국 (+44)</option>
                        <option value="일본">일본 (+81)</option>
                        <option value="한국">한국 (+82)</option>
                    </SelectBox>
                    <input type="text" />
                </SelectArea>
                

            </LoginContent>
        </LoginCtn>
    </Ctn>
  )
}

const Ctn = styled.div`
    margin: 10px auto;
    padding: 10px;
    max-width: 800px;
    width: 100%;
    
    border: 1px solid red;
`
const LoginCtn = styled.div`
    background-color: white;
    
    
    position: relative;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    padding: 10px;
`
const CloseBtn = styled.div`
    display: flex;
    top:11px;
    left: 15px;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    position: absolute;
    background-color: inherit;
`
const LoginHeader = styled.h3`
    display: flex;
    font-size: 16px;
    margin: 0;
    
    justify-content: center;
`
const LoginContent = styled.div`
    
`
const SelectArea = styled.div`
    width: 100%;
    min-height: 56px;
    box-sizing: border-box;
    min-height: 56px;
    
`
const SelectBox = styled.select`
    border: 1px solid #717171;
    border-radius: 5px;
    
    width: 100%;
    height: 100%;
`

export default LoginJJY