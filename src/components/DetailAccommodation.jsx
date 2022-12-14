import React, { useEffect, useState } from "react";
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
import { ClearIsSuccess, __putLikedAccommodation } from "../redux/modules/likedAccommodationSlice";

const DetailAccommodation = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);
    const { getAccommodationFocus } = useSelector((state) => state.accommodation);
    const {isSuccess,isLoading} = useSelector((state)=>state.likes)
    console.log(getAccommodationFocus)
    const [isLike, setIsLike] = useState(getAccommodationFocus?.accommoInfo?.likesData)

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
        getAccommodationFocus?.accommoInfo?.result?.facilities?.split(",");
    console.log(splitFacilities);
    console.log(getAccommodationFocus)
    const location = useLocation();

    const copyLink = async (text) => {
        try {
            await navigator.clipboard.writeText(text);

            alert("url??? ?????????????????????.");
        } catch (e) {
            alert("url ????????? ?????????????????????.");
        }
    };


    useEffect(() => {
        dispatch(__getAccommodation(id));
    }, [location]);
    ///

    

    function priceToString(price) {
        return price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    const initTotal = getAccommodationFocus?.accommoInfo?.result?.price * 5
    const vatTotal = initTotal * 0.15

    
    const onClickLiked = () => {
        if (isLike === undefined && getAccommodationFocus.accommoInfo.likesData === undefined) {
            setIsLike(getAccommodationFocus.accommoInfo.likesData)
            return alert('???????????? ????????? ???????????????.')
        } else if(!isLike || !getAccommodationFocus.accommoInfo.likesData) {
            if (window.confirm('??? ????????? ?????????????????? ?????????????????????????')) {
                dispatch(__putLikedAccommodation(id))
                return setIsLike(true)
            } else return setIsLike(false)
        } else if(isLike || getAccommodationFocus.accommoInfo.likesData) {
            if (window.confirm('??? ????????? ?????????????????? ?????????????????????????')) {
                dispatch(__putLikedAccommodation(id))
                return setIsLike(false)
            } else return setIsLike(true)
        }
    }

    // useEffect(()=> {

    // },[location])
    const iconColor = () => {
        if (isLike === undefined && getAccommodationFocus?.accommoInfo?.likesData === undefined) {
            return "#222222"
        } else if (!isLike || !getAccommodationFocus?.accommoInfo?.likesData) {
            return "#222222"
        } else if (isLike || getAccommodationFocus?.accommoInfo?.likesData) {
            return "red"
        } else {return "#222222" }
    }
    useEffect(() => {
        dispatch(__getAccommodation(id))
    }, [])
    useEffect(()=> {
        isSuccess && (isLike) && alert('????????? ?????????????????? ?????????????????????.') && setIsLike(true)
        isSuccess && (!isLike) && alert('????????? ?????????????????? ?????????????????????.') && setIsLike(false)
        
        dispatch(ClearIsSuccess())
    },[isLoading])

    return (
        <Ctn>
            <DetailCtn>
                <DetailHeader>
                    <Font22>{getAccommodationFocus?.accommoInfo?.result?.accName}</Font22>
                    <DetailHeaderBox>
                        <AccAddr>{getAccommodationFocus?.accommoInfo?.result?.accAddr}</AccAddr>
                        <PickArea>
                            <PickBtn onClick={() => copyLink(`https://dgbnb-fe.vercel.app${location.pathname}`)}>
                                <FiShare />
                                ????????????
                            </PickBtn>
                            <PickBtn onClick={() => {
                                onClickLiked()}} color={iconColor()}>
                                <FiHeart stroke={iconColor()} />
                                ??????
                            </PickBtn>
                        </PickArea>
                    </DetailHeaderBox>
                </DetailHeader>
                <AccPictureBox>
                    <MainPic>
                        <ImgTagBox>
                            <ImgTag
                                src={getAccommodationFocus?.accommoInfo?.result?.AccommodationsPictures[0]?.thumbnail}
                            />
                        </ImgTagBox>
                    </MainPic>
                    <OtherPic>
                        <OtherPicBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus?.accommoInfo?.result?.AccommodationsPictures[0]?.image1}
                                />
                            </ImgTagBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus?.accommoInfo?.result?.AccommodationsPictures[0]?.image2}
                                />
                            </ImgTagBox>
                        </OtherPicBox>
                        <OtherPicBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus?.accommoInfo?.result?.AccommodationsPictures[0]?.image3}
                                />
                            </ImgTagBox>
                            <ImgTagBox>
                                <ImgTag
                                    src={getAccommodationFocus?.accommoInfo?.result?.AccommodationsPictures[0]?.image4}
                                />
                            </ImgTagBox>
                        </OtherPicBox>
                    </OtherPic>
                    <PicBtn
                        fontSize='14px'
                    >
                        <TbGridDots />
                        ?????? ?????? ??????
                    </PicBtn>
                </AccPictureBox>

                <DetailBody>
                    <DetailBox>
                        <DatailBoxHeader>
                            <DatailBoxHeader2>
                                <Font22>
                                    {getAccommodationFocus?.hostInfo?.name}?????? ??????????????? ??????
                                </Font22>
                                <Font16>
                                    ?????? ?????? {getAccommodationFocus?.accommoInfo?.result?.maxPerson}??? ?? ??? {getAccommodationFocus?.accommoInfo?.result?.room} ?? ?????? {getAccommodationFocus?.accommoInfo?.result?.bed}??? ?? ?????? {getAccommodationFocus?.accommoInfo?.result?.bathroom}???
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
                            <CiParking1 size={24} />
                            <FlexCol>
                                <Font16 fontWeight="600">
                                    ?????? ?????? ????????? ????????????
                                </Font16>
                                <Font14>
                                    ?????? ???????????? ?????? ????????? ????????? ??? ??? ?????? ?????? ??? ???????????????.
                                </Font14>
                            </FlexCol>
                        </Padding24>
                        <Liner />
                        <Padding24
                            gap='20px'
                            flexDir='column'
                        >
                            <AirCover src='https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg' />
                            <Font16>
                                ?????? ???????????? ???????????? ????????? ??????????????? ?????? ????????? ???????????? ?????? ?????? ?????? ???????????? ????????? ?????? ????????? ????????? ?????? ?????? ??????????????? ???????????????.
                            </Font16>
                            <Font16
                                fontWeight="600"
                                textDecoration="underline"
                            >
                                ??? ????????????
                            </Font16>
                        </Padding24>
                        <Liner />
                        <Padding24
                            gap='20px'
                            flexDir='column'
                        >
                            <Font16>
                                {getAccommodationFocus?.accommoInfo?.result?.description}
                            </Font16>
                            <Font16
                                fontWeight='600'
                                textDecoration="underline"
                            >
                                ??? ??????
                            </Font16>
                        </Padding24>
                        <Liner />
                        <Padding48
                            flexDir='column'
                            gap='24px'
                        >
                            <Font22>
                                ?????? ????????????
                            </Font22>
                            <FlexCol
                                gap='16px'
                                maxHeight="160px"
                            >
                                {
                                    splitFacilities?.map((item) => (
                                        item.includes('drier') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.drier}
                                                alt="drier"
                                            />
                                            <Font16>????????????</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item) => (
                                        item.includes('shampoo') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.shampoo}
                                                alt="shampoo"
                                            />
                                            <Font16>??????</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item) => (
                                        item.includes('bath') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.bath}
                                                alt="bath"
                                            />
                                            <Font16>??????</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item) => (
                                        item.includes('warmWater') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.warmWater}
                                                alt="warmWater"
                                            />
                                            <Font16>??????</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item) => (
                                        item.includes('airConditioner') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.airConditioner}
                                                alt="airConditioner"
                                            />
                                            <Font16>??????</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item) => (
                                        item.includes('heating') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.heating}
                                                alt="heating"
                                            />
                                            <Font16>??????</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item) => (
                                        item.includes('wifi') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.wifi}
                                                alt="wifi"
                                            />
                                            <Font16>?????? ?????????</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item) => (
                                        item.includes('refrigerator') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.refrigerator}
                                                alt="refrigerator"
                                            />
                                            <Font16>?????????</Font16>
                                        </FlexRow>
                                    ))
                                }
                                {
                                    splitFacilities?.map((item) => (
                                        item.includes('parking') &&
                                        <FlexRow gap='10px'>
                                            <FacImg
                                                src={initFacilities?.parking}
                                                alt="parking"
                                            />
                                            <Font16>??????</Font16>
                                        </FlexRow>
                                    ))
                                }
                            </FlexCol>
                            <NormalBtn>
                                ???????????? {splitFacilities?.length}??? ?????? ??????
                            </NormalBtn>
                        </Padding48>
                        <Liner />
                        <Padding48
                            gap="5px"
                            flexDir='column'
                        >
                            <Font22>
                                ??????????????? 5???
                            </Font22>
                            <Font14>
                                2022??? 11??? 1??? - 2022??? 11??? 6???
                            </Font14>
                            <ImgCalenDar src="https://user-images.githubusercontent.com/77138259/199054701-1f79c1bc-a87f-4d0f-91c2-1e458e0d0e06.png" />
                            <ImgCalenDar2 src="https://user-images.githubusercontent.com/77138259/199055253-108b3599-f8bb-423d-b1ae-c6f6f273abe3.png" />
                        </Padding48>
                    </DetailBox>

                    {/* stickyBox ?????? */}
                    <DetailBoxRight>
                        <StickyArea>
                            <StickyBox>
                                <FlexCol gap="5px">
                                    <FlexRowLeftCenter>
                                        <Font22>???{priceToString(getAccommodationFocus?.accommoInfo?.result?.price)} </Font22>
                                        <Font16>/???</Font16>
                                    </FlexRowLeftCenter>
                                    <FlexRow gap="5px">
                                        <FaStar />
                                        <span>
                                            {(getAccommodationFocus?.accommoInfo?.result?.rating === null) ? "NEW" : getAccommodationFocus?.accommoInfo?.result?.rating}</span>
                                        <Font14Underline>
                                            ?????? {"46"}???
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
                                                >?????????</Text>
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
                                                >????????????</Text>
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
                                                >??????</Text>
                                                <Text
                                                    fontSize="14px"
                                                >????????? 1???</Text>
                                            </FlexCol>
                                            <IconBox
                                                padding="10px"
                                            ><FiChevronDown size={20} /></IconBox>
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
                                    >????????????</Button>
                                </FlexCol>
                                <FlexCol>
                                    <Text fontSize="12px" justifyContent="center" textAlign="center">
                                        ?????? ?????? ????????? ????????? ???????????? ????????????.
                                    </Text>
                                </FlexCol>
                                <FlexCol gap="10px">
                                    <FlexRow justifyContent="space-between">
                                        <Text fontSize="14px" textDecoration="underline">
                                            ???{priceToString(getAccommodationFocus?.accommoInfo?.result?.price)} ?? 5???
                                        </Text>
                                        <Text fontSize="14px">
                                            ???{priceToString(initTotal)}
                                        </Text>
                                    </FlexRow>
                                    <FlexRow justifyContent="space-between">
                                        <Text fontSize="14px" textDecoration="underline">
                                            ????????? ?????????
                                        </Text>
                                        <Text fontSize="14px">
                                            ???{priceToString(vatTotal)}
                                        </Text>
                                    </FlexRow>
                                </FlexCol>
                                <Liner />
                                <FlexRow justifyContent="space-between">
                                    <Text fontSize="14px" fontWeight="600">
                                        ??? ??????
                                    </Text>
                                    <Text fontSize="14px" fontWeight="600">
                                        ???{priceToString(initTotal + vatTotal)}
                                    </Text>
                                </FlexRow>
                            </StickyBox>
                            <FlexRow justifyContent="center" gap="10px">
                                <MdFlag size={14} color="#717171" />
                                <Font14>?????? ????????????</Font14>
                            </FlexRow>
                        </StickyArea>
                    </DetailBoxRight>
                </DetailBody>
                <Liner />

                {/* ?????? ?????? ?????? */}
                <Padding48 gap="50px" width="100%">
                    <FlexRow gap="10px" width="50%">
                        <FlexRow gap="10px">
                            <SlStar size={24} />
                            <Font16LH24>
                                ??? ???????????? ?????? ????????? ?????? ????????? 1??? ????????????.{" "}
                                <a
                                    href="#"
                                    style={{ fontWeight: "600", textDecoration: "underline" }}
                                >
                                    ?????? ?????? ?????? ??????
                                </a>
                            </Font16LH24>
                        </FlexRow>
                        
                    </FlexRow>
                    <FlexRow gap="10px" width="50%">
                        <FlexRow gap="10px">
                            <SlGlobe size={24} />
                            <Font16LH24>
                                ????????? ????????? ????????? ????????? ?????? ????????????????????????. ?????? ?????????{" "}
                                <a
                                    href="#"
                                    style={{ fontWeight: "600", textDecoration: "underline" }}
                                >
                                    ?????????????????? ????????? ?????? ??????
                                </a>
                                ??? ?????? ????????? ????????????. ?????? ?????? ?????? ??????
                            </Font16LH24>
                        </FlexRow>
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
const DetailHeader = styled.div`
`;
const AccAddr = styled.p`
  font-weight: 600;
  text-decoration: underline;
`;
const DetailHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  /* @media screen and (max-width: 500px){
    width: 100%;
    flex-direction: column;
    align-items: flex-start
  } */
`;
const PickArea = styled.div`
  display: flex;
  gap: 5px;
`;
const PickBtn = styled.button`
  color: ${props=>props.color};
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
    font-weight: ${props => props.fontWeight};
    text-decoration: ${props => props.textDecoration};
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