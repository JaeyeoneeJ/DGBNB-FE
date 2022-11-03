import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  __deleteAccommodation,
  __getAccommodationList,
} from "../redux/modules/accommodationSlice";
import { __getReservationList } from "../redux/modules/reservationSlice";
import { FaStar } from "react-icons/fa";
import { FiEdit3, FiX } from "react-icons/fi";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const memberId = localStorage.getItem("memberId");

  useEffect(() => {
    dispatch(__getAccommodationList());
  }, [dispatch]);

  const globalAccommodationList = useSelector(
    (state) => state.accommodation.getAccommodationList
  );
  function priceToString(price) {
    return price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log("숙소 목록__", globalAccommodationList);
  ///oncCLick 함수

  const onClickAccommodationFocus = (accId) => {
    navigate(`/accommodation/${accId}`);
  };

  const overLength30 = (text) => {
    if (text.length > 30) {
      return text.slice(0, 30) + "...";
    } else {
      return text;
    }
  };
  const overLength100 = (text) => {
    if (text.length > 100) {
      return text.slice(0, 100) + "...";
    } else {
      return text;
    }
  };

  const deleteHostingDispatch = (accId) => {
    if (window.confirm("등록한 숙소를 삭제하시겠습니까?")) {
      dispatch(__deleteAccommodation(accId));
    }
  };

  return (
    <>
      <Ctn>
        <Text fontSize="30px" fontWeight="600">
          나의 호스팅 - 총{" "}
          {
            globalAccommodationList.filter(
              (data) =>
                data.memberId === Number(localStorage.getItem("memberId"))
            ).length
          }
          개
        </Text>
        <FlexCol>
          {globalAccommodationList
            .filter(
              (data) =>
                data.memberId === Number(localStorage.getItem("memberId"))
            )
            .slice(0)
            .reverse()
            .map((item) => {
              return (
                <>
                  <AccommodationBox key={item.accId}>
                    <AccommodationCtn>
                      <ImgBox>
                        <ClickBtnArea>
                          <ClickBtn
                            onClick={() =>
                              navigate("/modi", {
                                state: { accId: item.accId },
                              })
                            }
                            bgColor="#1a73e8"
                          >
                            <FiEdit3 size={20} stroke="white" />
                          </ClickBtn>
                          <ClickBtn
                            bgColor="tomato"
                            onClick={() => {
                              deleteHostingDispatch(item.accId);
                            }}
                          >
                            <FiX size={20} stroke="white" />
                          </ClickBtn>
                        </ClickBtnArea>
                        <ImgTag
                          onClick={() => onClickAccommodationFocus(item.accId)}
                          src={item.AccommodationsPictures[0].thumbnail}
                        />
                      </ImgBox>
                      <AccommodationContent>
                        <FlexCol gap="5px">
                          <Text color="#717171">{item.accAddr}</Text>
                          <Text fontSize="20px" fontWeight="600">
                            {overLength30(item.accName)}
                          </Text>
                          <Liner width="40px" height="2px" />
                          <Text color="#717171">
                            최대 인원 {item.maxPerson}명 · 방 {item.room} · 침대{" "}
                            {item.bed}개 · 욕실 {item.bathroom}개
                          </Text>
                        </FlexCol>
                        <FlexRow gap="10px" justifyContent="space-between">
                          <FlexRow gap="5px">
                            <FaStar />
                            <strong>
                              {item.rating === null ? "NEW" : item.rating}
                            </strong>
                          </FlexRow>
                          <FlexRow justifyContent="right">
                            <Text fontSize="16px" fontWeight="600">
                              ₩{priceToString(item.price)}{" "}
                            </Text>
                            <Text fontSize="16px">/박</Text>
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

export default UserProfile;

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
  height: ${(props) => {
    if (props.height === undefined) {
      return "1px";
    } else {
      return props.height;
    }
  }};
  margin: ${(props) => {
    if (props.margin === undefined) {
      return "10px 0";
    } else {
      return props.margin;
    }
  }};
  background-color: #ebebeb;
`;

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
  @media screen and (max-width: 800px) {
    max-width: 800px;
  }
`;
const ImgTag = styled.img`
  width: 100%;
  max-width: 300px;
  display: block;
  aspect-ratio: 4/3;
  object-fit: cover;
  transition: all, 0.3s;
  @media screen and (max-width: 800px) {
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
  opacity: 0.2;
  transition: all, 0.3s;
  /* background-color: tomato; */
`;
const ClickBtn = styled.div`
  display: flex;
  background-color: ${(props) => props.bgColor};
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const AccommodationCtn = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const AccommodationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  @media screen and (max-width: 800px) {
    height: auto;
  }
`;
