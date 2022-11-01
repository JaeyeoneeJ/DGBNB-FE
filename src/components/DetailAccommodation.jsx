import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { FiShare, FiHeart } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { CiParking1 } from "react-icons/ci";
import { GiAtSea } from "react-icons/gi";
import { MdFlag } from "react-icons/md";
import { SlStar, SlGlobe } from "react-icons/sl";
import { useLocation } from 'react-router-dom';

const DetailAccommodation = () => {
    const {getAccommodationFocus} = useSelector((state)=>state.accommodation)
    // console.log(getAccommodationFocus)
    const location = useLocation()

    const copyLink = async (text) => {
        try {
            await navigator.clipboard.writeText(text);

            alert('url이 복사되었습니다.')
        } catch (e) {
            alert('url 복사가 실패하였습니다.')
        }
    }
    
    
    useEffect(()=> {
        console.log(location)
    },[location])

    return (
        <Ctn>
            <DetailCtn>
                <DetailHeader>
                    <Font22>{getAccommodationFocus.accName}</Font22>
                    <DetailHeaderBox>
                        <AccAddr>{getAccommodationFocus.accAddr}</AccAddr>
                        <PickArea>
                            <PickBtn onClick={()=>copyLink(`http://localhost:3000${location.pathname}`)}>
                                <FiShare />
                                공유하기
                            </PickBtn>
                            <PickBtn>
                                <FiHeart />
                                저장
                            </PickBtn>
                        </PickArea>
                    </DetailHeaderBox>
                </DetailHeader>
                <AccPictureBox>
                    <MainPic>
                        <ImgTagBox>
                            <ImgTag
                                src={getAccommodationFocus.thumbnail}
                            />
                        </ImgTagBox>
                    </MainPic>
                    <OtherPic>
                        <OtherPicBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus.accImg[0]}
                                />
                            </ImgTagBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus.accImg[1]}
                                />
                            </ImgTagBox>
                        </OtherPicBox>
                        <OtherPicBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus.accImg[2]}
                                />
                            </ImgTagBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus.accImg[3]}
                                />
                            </ImgTagBox>
                        </OtherPicBox>
                    </OtherPic>
                    <PicBtn
                        fontSize='14px'
                    >
                        <TbGridDots />
                        사진 모두 보기
                    </PicBtn>
                </AccPictureBox>

                <DetailBody>
                    <DetailBox>
                        <DatailBoxHeader>
                            <DatailBoxHeader2>
                                <Font22>
                                    {`${'홍길동'}님이 호스팅하는 펜션`}
                                </Font22>
                                <Font16>
                                    최대 인원 {getAccommodationFocus.maxPerson}명 · 침대 {getAccommodationFocus.bed}개 · 욕실 {getAccommodationFocus.bathroom}개
                                </Font16>
                            </DatailBoxHeader2>
                            <DatailBoxHeader2>
                                <ProfileImg
                                    src="https://a0.muscache.com/im/pictures/user/e4ed279c-5567-4a8e-8876-9f746b53eb7a.jpg?im_w=240" alt="userProfilePic"
                                >
                                </ProfileImg>
                            </DatailBoxHeader2>
                        </DatailBoxHeader>
                        <Liner />
                        <Padding24
                            gap='5px'
                        >
                            <CiParking1 size={24}/>
                            <FlexCol>
                                <Font16 fontWeight="600">
                                    무료 주차 혜택을 누리세요
                                </Font16>
                                <Font14>
                                    해당 지역에서 무료 주차가 가능한 몇 안 되는 숙소 중 하나입니다.
                                </Font14>
                            </FlexCol>
                        </Padding24>
                        <Liner />
                        <Padding24
                            gap='20px'
                            flexDir='column'
                        >
                            <AirCover src='https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg'/>
                            <Font16>
                                모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다.
                            </Font16>
                            <Font16
                                fontWeight="600"
                                textDecoration="underline"
                            >
                                더 알아보기
                            </Font16>
                        </Padding24>
                        <Liner />
                        <Padding24
                            gap='20px'
                            flexDir='column'
                        >
                            <Font16>
                                오션뷰 객실을 보유하고 있는 펜션입니다.<br/><br/>
                                <strong>숙소</strong><br/>
                                10 평, 바다전망<br/><br/>
                                &#91;추가인원 관련안내&#93;...
                            </Font16>
                            <Font16
                                fontWeight='600'
                                textDecoration="underline"
                            >
                                더 보기
                            </Font16>
                        </Padding24>
                        <Liner />
                        <Padding48
                            flexDir='column'
                            gap='24px'
                        >
                            <Font22>
                                숙소 편의시설
                            </Font22>
                            <FlexCol gap='16px'>
                                <FlexRow gap='10px'>
                                    <GiAtSea size={16}/>
                                    <Font16>바다 전망</Font16>
                                </FlexRow>
                                <FlexRow gap='10px'>
                                    <GiAtSea size={16}/>
                                    <Font16>건물 내 무료 주차</Font16>
                                </FlexRow>
                                <FlexRow gap='10px'>
                                    <GiAtSea size={16}/>
                                    <Font16>TV</Font16>
                                </FlexRow>
                            </FlexCol>
                            <NormalBtn>
                                편의시설 16개 모두 보기
                            </NormalBtn>
                        </Padding48>
                        <Liner />
                        <Padding48
                            gap="5px"
                            flexDir='column'
                        >
                            <Font22>
                                속초시에서 5박
                            </Font22>
                            <Font14>
                                2022년 11월 1일 - 2022년 11월 6일
                            </Font14>
                            <ImgCalenDar src="https://user-images.githubusercontent.com/77138259/199054701-1f79c1bc-a87f-4d0f-91c2-1e458e0d0e06.png" />
                            <ImgCalenDar2 src="https://user-images.githubusercontent.com/77138259/199055253-108b3599-f8bb-423d-b1ae-c6f6f273abe3.png" />
                        </Padding48>
                    </DetailBox>

                    <DetailBoxRight>
                        <StickyArea>
                            <StickyBox>
                                <FlexRowLeftCenter>
                                    <Font22>₩80,667 </Font22>
                                    <Font16>/박</Font16>
                                </FlexRowLeftCenter>
                                <FlexRow>
                                    <FaStar />
                                    <span>{"4.8"} · </span>
                                    <Font14Underline>
                                        후기 {"46"}개
                                    </Font14Underline>
                                </FlexRow>
                            </StickyBox>
                            <FlexRow justifyContent="center" gap="10px">
                                <MdFlag size={14} color="#717171"/>
                                <Font14>숙소 신고하기</Font14>
                            </FlexRow>
                        </StickyArea>
                    </DetailBoxRight>
                </DetailBody>
                <Liner />
                <Padding48 gap='50px' width="100%">
                    <FlexRow gap="10px" width="50%">
                        <FlexRow><SlStar size={24} /></FlexRow>
                        <Font16LH24>
                            이 호스트의 다른 숙소에 대한 후기가 1개 있습니다. <a style={{fontWeight:"600", textDecoration:"underline"}}>다른 숙소 후기 보기</a>
                        </Font16LH24>
                    </FlexRow>
                    <FlexRow gap="10px" width="50%">
                        <FlexRow><SlGlobe size={24} /></FlexRow>
                        
                        <Font16LH24>
                            여행에 차질이 없도록 최선을 다해 도와드리겠습니다. 모든 예약은 <a style={{fontWeight:"600", textDecoration:"underline"}}>에어비앤비의 게스트 환불 정책</a>에 따라 보호를 받습니다.
                            다른 숙소 후기 보기
                        </Font16LH24>
                    </FlexRow>
                </Padding48>
                <Padding48>
                    
                </Padding48>
            </DetailCtn>
        </Ctn>
    )
}

const FlexRowLeftCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 5px;
`
const FlexRow = styled.div`
    width: ${props=>props.width};
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    gap: ${props=>props.gap};
    justify-content: ${props=>props.justifyContent};
`
const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${props=>props.gap};
`
const Ctn = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 100px auto 0 auto;
`
const DetailCtn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const DetailHeader = styled.div``
const AccAddr = styled.p`
    font-weight: 600;
    text-decoration: underline;
`
const DetailHeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const PickArea = styled.div`
    display: flex;
    gap: 5px;
`
const PickBtn = styled.button`
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 14px;
    padding: 8px;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    text-decoration: underline;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #ebebeb;
    }
`
const AccPictureBox = styled.div`
    position: relative;
    display: flex;
    gap: 5px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
`
const MainPic = styled.div`
    width: 50%;
    box-sizing: border-box;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`
const OtherPic = styled.div`
    display: flex;
    gap: 5px;
    width: 50%;
    @media screen and (max-width: 800px) {
        display: none;
    }
`
const OtherPicBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 50%;
    @media screen and (max-width: 800px) {
        display: none;
    }
`
const ImgTagBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: black;
`
const ImgTag = styled.img`
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    transition: all, 0.3s;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`
const ImgCalenDar = styled.img`
    display: block;
    box-sizing: border-box;
    width: 100%;
    @media screen and (max-width: 800px){
        display: none;
    }
`
const ImgCalenDar2 = styled.img`
    display: none;
    box-sizing: border-box;
    width: 100%;
    @media screen and (max-width: 800px){
        display: block;
    }
`
const PicBtn = styled.button`
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: white;
    padding: 7px 15px;
    font-weight: 600;
    border: 1px solid #222;
    border-radius: 5px;
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #ebebeb;
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`
const DetailBody = styled.div`
    position: relative;
    margin-top: 30px;
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
`
const DetailBox = styled.div`
    display: flex;
    width: 58.333333333333336%;    
    /* border: 1px solid red; */
    flex-direction: column;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`
const DatailBoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 24px;
`
const DatailBoxHeader2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const Font22 = styled.h3`
    font-size: 22px;
    font-weight: 600;
`
const Font16 = styled.p`
    font-size: 16px;
    font-weight: ${props=>props.fontWeight};
    text-decoration: ${props=>props.textDecoration};
`
const Font16LH24 = styled.p`
    font-size: 16px;
    font-weight: ${props=>props.fontWeight};
    text-decoration: ${props=>props.textDecoration};
    line-height: 24px;
`
const Font14 = styled.p`
    font-size: 14px;
    color: #717171;
`
const Font14Underline = styled.p`
    font-size: 14px;
    text-decoration: underline;
    color: #717171;
`
const ProfileImg = styled.img`
    display: block;
    width: 50px;
    border-radius: 50%;
`
const DetailBoxRight = styled.div`
    width: 33.33333333%;
    position: relative;
    /* border: 1px solid green; */
    @media screen and (max-width: 800px){
        display: none;
    }
`
const StickyArea = styled.div`
    position: sticky;
    top: 120px;
    right: 0;
`
const StickyBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 24px;
    margin-bottom: 20px;
    height: 500px;
    border: 1px solid #ebebeb;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`
const Liner = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ebebeb;
`
const Padding24 = styled.div`
    padding: 24px 0;
    display: flex;
    flex-direction: ${props=>props.flexDir};
    gap: ${props=>props.gap};
    width: ${props=>props.width};
`
const Padding48 = styled.div`
    padding: 48px 0;
    display: flex;
    flex-direction: ${props=>props.flexDir};
    gap: ${props=>props.gap};
    width: ${props=>props.width};
`
const AirCover = styled.img`
    width: 95px;
    height: auto;
`
const NormalBtn = styled.button`
    padding: 13px 23px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #222;
    width: 210px;
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
`

export default DetailAccommodation