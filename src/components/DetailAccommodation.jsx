import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FiShare, FiHeart } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { CiParking1 } from "react-icons/ci";
import { MdFlag } from "react-icons/md";
import { SlStar, SlGlobe } from "react-icons/sl";
import { FiChevronDown } from "react-icons/fi";
import { useLocation, useParams } from "react-router-dom";
import { __getAccommodation } from "../redux/modules/accommodationSlice";
import { __deleteAccommodation } from "../redux/modules/accommodationSlice";
import Button from "./elements/Button";

const DetailAccommodation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const { getAccommodationFocus } = useSelector((state) => state.accommodation);

  const initFacilities = {
    drier: "https://cdn-icons-png.flaticon.com/512/4540/4540144.png",
    shampoo: "https://cdn-icons-png.flaticon.com/512/1848/1848239.png",
    bath: "https://cdn-icons-png.flaticon.com/512/857/857663.png",
    warmWater: "https://cdn-icons-png.flaticon.com/512/5322/5322512.png",
    airConditioner: "https://cdn-icons-png.flaticon.com/512/5907/5907476.png",
    heating: "https://cdn-icons-png.flaticon.com/512/1684/1684324.png",
    wifi: "https://cdn-icons-png.flaticon.com/512/2696/2696335.png",
    refrigerator: "https://cdn-icons-png.flaticon.com/512/7259/7259784.png",
    parking: "https://cdn-icons-png.flaticon.com/512/846/846338.png",
  };

  const splitFacilities =
    getAccommodationFocus?.accommoInfo?.facilities?.split(",");
  console.log(splitFacilities);
  // console.log(getAccommodationFocus)
  const location = useLocation();

  const copyLink = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("url이 복사되었습니다.");
    } catch (e) {
      alert("url 복사가 실패하였습니다.");
    }
  };

    const splitFacilities = getAccommodationFocus?.accommoInfo?.facilities?.split(",")
    console.log(splitFacilities)
    // console.log(getAccommodationFocus)
        
    const copyLink = async (text) => {
        try {
            await navigator.clipboard.writeText(text);

  useEffect(() => {
    dispatch(__getAccommodation(id));
  }, [location]);
  ///

  const deleteHostingDispatch = (accId) => {
    if (window.confirm("호스팅을 삭제하시겠습니까?")) {
      dispatch(__deleteAccommodation(accId));
    }
    
    function priceToString(price) {
        return price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    const initTotal = getAccommodationFocus?.accommoInfo?.price*5
    const vatTotal = initTotal*0.15
    
    const onClickLiked = () => {
        return window.confirm('이 숙소를 위시리스트에 저장하시겠습니까?') ? dispatch(__putLikedAccommodation(id)) : null
    }

    // useEffect(()=> {
        
    // },[location])

    useEffect(()=>{
        dispatch(__getAccommodation(id))
        isSuccess && alert('숙소가 위시리스트에 저장되었습니다.')
        dispatch(ClearIsSuccess())
    },[isSuccess])

    return (
        <Ctn>
            <DetailCtn>
                <DetailHeader>
                    <Font22>{getAccommodationFocus?.accommoInfo?.accName}</Font22>
                    <DetailHeaderBox>
                        <AccAddr>{getAccommodationFocus?.accommoInfo?.accAddr}</AccAddr>
                        <PickArea>
                            <PickBtn onClick={()=>copyLink(`http://localhost:3000${location.pathname}`)}>
                                <FiShare />
                                공유하기
                            </PickBtn>
                            <PickBtn onClick={()=>onClickLiked()}>
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
                                src={getAccommodationFocus?.accommoInfo?.AccommodationsPictures[0]?.thumbnail}
                            />
                        </ImgTagBox>
                    </MainPic>
                    <OtherPic>
                        <OtherPicBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus?.accommoInfo?.AccommodationsPictures[0]?.image1}
                                />
                            </ImgTagBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus?.accommoInfo?.AccommodationsPictures[0]?.image2}
                                />
                            </ImgTagBox>
                        </OtherPicBox>
                        <OtherPicBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus?.accommoInfo?.AccommodationsPictures[0]?.image3}
                                />
                            </ImgTagBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus?.accommoInfo?.AccommodationsPictures[0]?.image4}
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
                                {getAccommodationFocus?.hostInfo?.name}님이 호스팅하는 펜션
                                </Font22>
                                <Font16>
                                    최대 인원 {getAccommodationFocus?.accommoInfo?.maxPerson}명 · 방 {getAccommodationFocus?.accommoInfo?.room} · 침대 {getAccommodationFocus?.accommoInfo?.bed}개 · 욕실 {getAccommodationFocus?.accommoInfo?.bathroom}개
                                </Font16>
                            </DatailBoxHeader2>
                            <DatailBoxHeader2>
                                <ProfileImg
                                    src={getAccommodationFocus?.hostInfo?.memberImg}
                                    alt="userProfilePic"
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
                                {getAccommodationFocus?.accommoInfo?.description}
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
                            <FlexCol
                                gap='16px'
                                maxHeight="160px"
                            >
                                {
                                    splitFacilities?.map((item)=>(
                                        item.includes('drier') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.drier}
                                                alt="drier"
                                            />
                                            <Font16>드라이어</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item)=>(
                                        item.includes('shampoo') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.shampoo}
                                                alt="shampoo"
                                            />
                                            <Font16>샴푸</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item)=>(
                                        item.includes('bath') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.bath}
                                                alt="bath"
                                            />
                                            <Font16>욕조</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item)=>(
                                        item.includes('warmWater') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.warmWater}
                                                alt="warmWater"
                                            />
                                            <Font16>온수</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item)=>(
                                        item.includes('airConditioner') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.airConditioner}
                                                alt="airConditioner"
                                            />
                                            <Font16>냉방</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item)=>(
                                        item.includes('heating') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.heating}
                                                alt="heating"
                                            />
                                            <Font16>난방</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item)=>(
                                        item.includes('wifi') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.wifi}
                                                alt="wifi"
                                            />
                                            <Font16>무선 인터넷</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item)=>(
                                        item.includes('refrigerator') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.refrigerator}
                                                alt="refrigerator"
                                            />
                                            <Font16>냉장고</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item)=>(
                                        item.includes('parking') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.parking}
                                                alt="parking"
                                            />
                                            <Font16>주차</Font16>
                                        </FlexRow>
                                    ))
                                }
                            </FlexCol>
                            <NormalBtn>
                                편의시설 {splitFacilities?.length}개 모두 보기
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

                    {/* stickyBox 시작 */}
                    <DetailBoxRight>
                        <StickyArea>
                            <StickyBox>
                                <FlexCol gap="5px">
                                    <FlexRowLeftCenter>
                                        <Font22>₩{priceToString(getAccommodationFocus?.accommoInfo?.price)} </Font22>
                                        <Font16>/박</Font16>
                                    </FlexRowLeftCenter>
                                    <FlexRow gap="5px">
                                        <FaStar />
                                        <span>
                                        {(getAccommodationFocus?.accommoInfo?.rating===null) ? "NEW" : getAccommodationFocus?.accommoInfo?.rating}</span>
                                        <Font14Underline>
                                            후기 {"46"}개
                                        </Font14Underline>
                                    </FlexRow>
                                </FlexCol>
                                <BorderBox>
                                    <FlexCol>
                                        <FlexRow
                                            border="1px solid #B0B0B0"
                                            borderRadius="8px 8px 0 0"
                                            borderBottom="none"
                                        >
                                            <FlexCol
                                                gap='5px'
                                                padding="10px"
                                            >
                                                <Text
                                                    fontSize="10px"
                                                    fontWeight="600"
                                                >체크인</Text>
                                                <Text
                                                    fontSize="14px"
                                                >2022.11.05</Text>
                                            </FlexCol>
                                            <FlexCol
                                                gap='5px'
                                                borderLeft="1px solid #B0B0B0"
                                                padding="10px"
                                            >
                                                <Text
                                                    fontSize="10px"
                                                    fontWeight="600"
                                                >체크아웃</Text>
                                                <Text
                                                    fontSize="14px"
                                                >2022.11.09</Text>
                                            </FlexCol>
                                        </FlexRow>
                                        <FlexRow
                                            border="1px solid #B0B0B0"
                                            borderRadius="0 0 8px 8px"
                                            alignItem="center"
                                        >
                                            <FlexCol
                                                gap='5px'
                                                padding="10px"
                                            >
                                                <Text
                                                    fontSize="10px"
                                                    fontWeight="600"
                                                >인원</Text>
                                                <Text
                                                    fontSize="14px"
                                                >게스트 1명</Text>
                                            </FlexCol>
                                            <IconBox
                                                padding="10px"
                                            ><FiChevronDown size={20}/></IconBox>
                                        </FlexRow>
                                    </FlexCol>
                                </BorderBox>
                                <FlexCol>
                                    <Button
                                        borderRadius='8px'
                                        border='none'
                                        background="linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)"
                                        color='white'
                                        fontWeight='600'
                                        padding='14px'
                                        width='100%'
                                        fontSize='16px'
                                    >예약하기</Button>
                                </FlexCol>
                                <FlexCol>
                                    <Text fontSize="12px" justifyContent="center" textAlign="center">
                                        예약 확정 전에는 요금이 청구되지 않습니다.
                                    </Text>
                                </FlexCol>
                                <FlexCol gap="10px">
                                    <FlexRow justifyContent="space-between">
                                        <Text fontSize="14px" textDecoration="underline">
                                            ₩{priceToString(getAccommodationFocus?.accommoInfo?.price)} × 5박
                                        </Text>
                                        <Text fontSize="14px">
                                            ₩{priceToString(initTotal)}
                                        </Text>
                                    </FlexRow>
                                    <FlexRow justifyContent="space-between">
                                        <Text fontSize="14px" textDecoration="underline">
                                            서비스 수수료
                                        </Text>
                                        <Text fontSize="14px">
                                            ₩{priceToString(vatTotal)}
                                        </Text>
                                    </FlexRow>
                                </FlexCol>
                                <Liner />
                                <FlexRow justifyContent="space-between">
                                    <Text fontSize="14px" fontWeight="600">
                                        총 합계
                                    </Text>
                                    <Text fontSize="14px" fontWeight="600">
                                        ₩{priceToString(initTotal+vatTotal)}
                                    </Text>
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

        {/* 아래 영역 시작 */}
        <Padding48 gap="50px" width="100%">
          <FlexRow gap="10px" width="50%">
            <FlexRow>
              <SlStar size={24} />
            </FlexRow>
            <Font16LH24>
              이 호스트의 다른 숙소에 대한 후기가 1개 있습니다.{" "}
              <a
                href="#"
                style={{ fontWeight: "600", textDecoration: "underline" }}
              >
                다른 숙소 후기 보기
              </a>
            </Font16LH24>
          </FlexRow>
          <FlexRow gap="10px" width="50%">
            <FlexRow>
              <SlGlobe size={24} />
            </FlexRow>

            <Font16LH24>
              여행에 차질이 없도록 최선을 다해 도와드리겠습니다. 모든 예약은{" "}
              <a
                href="#"
                style={{ fontWeight: "600", textDecoration: "underline" }}
              >
                에어비앤비의 게스트 환불 정책
              </a>
              에 따라 보호를 받습니다. 다른 숙소 후기 보기
            </Font16LH24>
            <button
              onClick={() => {
                deleteHostingDispatch(id);
              }}
            >
              저는 호스팅 삭제 버튼입니다
            </button>
          </FlexRow>
        </Padding48>
        <Padding48></Padding48>
      </DetailCtn>
    </Ctn>
  );
};

const FlexRowLeftCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 5px;
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
const Ctn = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto 0 auto;
`;
const DetailCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const DetailHeader = styled.div``;
const AccAddr = styled.p`
  font-weight: 600;
  text-decoration: underline;
`;
const DetailHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PickArea = styled.div`
  display: flex;
  gap: 5px;
`;
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
`;
const AccPictureBox = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
`;
const MainPic = styled.div`
  width: 50%;
  box-sizing: border-box;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const OtherPic = styled.div`
  display: flex;
  gap: 5px;
  width: 50%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const OtherPicBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const ImgTagBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
`;
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
`;
const ImgCalenDar = styled.img`
  display: block;
  box-sizing: border-box;
  width: 100%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const ImgCalenDar2 = styled.img`
  display: none;
  box-sizing: border-box;
  width: 100%;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
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
`;
const DetailBody = styled.div`
  position: relative;
  margin-top: 30px;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;
const DetailBox = styled.div`
  display: flex;
  width: 58.333333333333336%;
  /* border: 1px solid red; */
  flex-direction: column;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const DatailBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 24px;
`;
const DatailBoxHeader2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Font22 = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
const Font16 = styled.p`
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight};
  text-decoration: ${(props) => props.textDecoration};
`;
const Font16LH24 = styled.p`
    width: 100%;
    font-size: 16px;
    font-weight: ${props=>props.fontWeight};
    text-decoration: ${props=>props.textDecoration};
    line-height: 24px;
`
const Font14 = styled.p`
  font-size: 14px;
  color: #717171;
`;
const Font14Underline = styled.p`
  font-size: 14px;
  text-decoration: underline;
  color: #717171;
`;
const ProfileImg = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
const DetailBoxRight = styled.div`
  width: 33.33333333%;
  position: relative;
  /* border: 1px solid green; */
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const StickyArea = styled.div`
  position: sticky;
  top: 120px;
  right: 0;
  margin-bottom: 50px;
`;
const StickyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  margin-bottom: 20px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;
const Liner = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
`;
const Padding24 = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
`;
const Padding48 = styled.div`
  padding: 48px 0;
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
`;
const AirCover = styled.img`
  width: 95px;
  height: auto;
`;
const NormalBtn = styled.button`
  padding: 13px 23px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #222;
  width: 210px;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
`;
const FacImg = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
`;
const BorderBox = styled.div``;
const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  text-decoration: ${(props) => props.textDecoration};
`;
const IconBox = styled.div`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;

export default DetailAccommodation;
