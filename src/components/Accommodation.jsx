import React from 'react'
import styled from 'styled-components'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Accommodation = ({ acc }) => {
    const navigate = useNavigate()
    
    // console.log(acc)
    return (
        <Ctn onClick={()=>navigate(`/accommodation/${acc.accId}`)}>
            <ImgBox>
                <ImgTag src='https://a0.muscache.com/im/pictures/658a9058-3441-4af9-a56b-e7b56bf07c5e.jpg?im_w=720' alt={`acc.accId`} />
            </ImgBox>
            <ContentBox>
                <AccContent>
                    <AccHeader>
                        <AccName>{acc.accName}</AccName>
                        <StarArea>
                            <FaStar />
                            <span>{"4.8"}</span>
                        </StarArea>
                    </AccHeader>
                    <AccText>{acc.accAddr}</AccText>
                    <AccText>방: {acc.room}, 침대: {acc.bed}, 최대인원: {acc.maxPerson}명 </AccText>
                </AccContent>
                <AccPrice><Strong>{"₩42,184"}</Strong> /박</AccPrice>
            </ContentBox>
        </Ctn>
    )
}

const Ctn = styled.div`
    /* border: 1px solid green; */
    width: 15.5%;
    margin-bottom: 30px;
    cursor: pointer;
    
    @media screen and (max-width: 1800px){
        width: 18.8%;
    }
    @media screen and (max-width: 1600px){
        width: 23.8%;
    }
    @media screen and (max-width: 1200px){
        width: 32.2%;
    }
    @media screen and (max-width: 950px){
        width: 49%;
    }
    @media screen and (max-width: 550px){
        width: 100%;
    }
`
const ImgBox = styled.div`
    width: 100%;
    box-sizing: border-box;
`
const ImgTag = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
    border: none;
    border-radius: 10px;
`
const ContentBox = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`
const AccHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`
const AccName = styled.h3`
    font-size: 16px;
`
const StarArea = styled.div`
    display: flex;
    /* align-items: center; */
    gap: 5px;
`
const AccContent = styled.div`
    
`
const AccText = styled.p`
    color: #717171;
`
const AccPrice = styled.div``
const Strong = styled.strong``


export default Accommodation