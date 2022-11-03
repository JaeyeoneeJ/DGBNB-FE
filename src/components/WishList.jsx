import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __deleteAccommodation, __getAccommodationList } from "../redux/modules/accommodationSlice";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { __getLikedAccommodationList } from "../redux/modules/likedAccommodationSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const memberId = localStorage.getItem("memberId");

  useEffect(() => {
    dispatch(__getLikedAccommodationList(memberId));
  }, [dispatch]);

  const getLikedAccommodationList = useSelector(
    (state) => state.likes.getLikedAccommodationList
  );
  
  function priceToString(price) {
    return price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  console.log("숙소 목록__", getLikedAccommodationList);

  const overLength30 = (text) => {
    if (text.length > 30) {
      return text.slice(0, 30)+"..."
    } else {
      return text
    }
  }
  const overLength100 = (text) => {
    if (text.length > 100) {
      return text.slice(0, 100)+"..."
    } else {
      return text
    }
  }

  const deleteHostingDispatch = (accId) => {
    if (window.confirm("등록한 숙소를 삭제하시겠습니까?")) {
        // dispatch(__deleteAccommodation(accId));
    }
  }

  return (
    <>
      <Ctn>
        <Text fontSize="30px" fontWeight="600">나의 위시리스트 - 총 {getLikedAccommodationList?.length}개</Text>
        <FlexCol>
          {getLikedAccommodationList
            .slice(0).reverse().map((item) => {
              return (
                <>
                  <AccommodationBox
                    key={item?.accommoInfo?.accId}
                  >
                    <AccommodationCtn>
                      <ImgBox>
                        <ClickBtnArea>
                          <ClickBtn
                            onClick={()=>1}
                          >
                            <FiHeart size={20} stroke="tomato" strokeWidth={3} />
                          </ClickBtn>
                          
                        </ClickBtnArea>
                        <ImgTag
                          onClick={()=>navigate(`/accommodation/${item?.accommoInfo?.accId}`)}
                          src={item?.thumbnail?.thumbnail}
                        />
                      </ImgBox>
                      <AccommodationContent>
                        <FlexCol gap="5px">
                          <Text color="#717171">
                            {item?.accommoInfo?.accAddr}
                          </Text>
                          <Text fontSize="20px" fontWeight="600">
                            {item?.accommoInfo?.accName}
                          </Text>
                          <Liner width="40px" height="2px"/>
                          <Text color="#717171">
                            최대 인원 {item?.accommoInfo?.maxPerson}명 · 방 {item?.accommoInfo?.room} · 침대 {item?.accommoInfo?.bed}개 · 욕실 {item?.accommoInfo?.bathroom}개
                            </Text>
                        </FlexCol>
                        <FlexRow gap="10px" justifyContent="space-between">
                          <FlexRow gap="5px">
                            <FaStar />
                            <strong>
                              {(item?.accommoInfo?.rating === null) ? "NEW" : item?.accommoInfo?.rating}
                            </strong>
                          </FlexRow>
                          <FlexRow justifyContent="right">
                            <Text fontSize="16px" fontWeight="600">
                            ₩{priceToString(item?.accommoInfo?.price)} </Text><Text fontSize="16px">/박</Text>
                          </FlexRow>
                        </FlexRow>
                      </AccommodationContent>
                    </AccommodationCtn>
                  </AccommodationBox>
                  <Liner margin="20px 0" />
                </>
              );
            })}
        </FlexCol>
      </Ctn>
    </>
  );
};

export default WishList;

const Ctn = styled.div`
  max-width: 800px;
  margin: 120px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px;
`;

const FlexRow = styled.div`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};

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
  height: ${(props) => props.height};
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
`;
const Liner = styled.div`
  width: ${(props) => props.width};
  height: ${(props)=> {
    if (props.height===undefined) {
      return "1px"
    } else {
      return props.height
    }
  }};
  margin: ${(props)=> {
    if (props.margin===undefined) {
      return "10px 0"
    } else {
      return props.margin
    }
  }};
  background-color: #ebebeb;
`

const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  text-decoration: ${(props) => props.textDecoration};
`;

const AccommodationBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  cursor: pointer;
`;
const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 300px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  background-color: black;
  &:hover > span {
    opacity: 1;
  }
  &:hover img {
    opacity: 0.8;
  }
  @media screen and (max-width: 800px){
    max-width: 800px;
  }
`
const ImgTag = styled.img`
  width: 100%;
  max-width: 300px;
  display: block;
  aspect-ratio: 4/3;
  object-fit: cover;
  transition: all, 0.3s;
  @media screen and (max-width: 800px){
    max-width: 800px;
  }
`;
const ClickBtnArea = styled.span`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
  transition: all, 0.3s;
  /* background-color: tomato; */
`
const ClickBtn = styled.div`
  display: flex;
  background-color: rgba(255,255,255,0.8);
  /* border: 2px solid white; */
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: all, 0.3s;
  &:hover {
    background-color: rgba(255,255,255,1);
  }
`
const AccommodationCtn = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`;
const AccommodationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 800px){
    height: auto;
  }
`