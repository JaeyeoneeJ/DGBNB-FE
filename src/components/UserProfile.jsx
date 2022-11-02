import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getAccommodationList } from "../redux/modules/accommodationSlice";
import { __getReservationList } from "../redux/modules/reservationSlice";

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

  console.log("숙소 목록__", globalAccommodationList);
  ///oncCLick 함수

  const onClickAccommodationFocus = (accId) => {
    navigate(`/accommodation/${accId}`);
  };

  return (
    <>
      <WholeBox>
        <MyHostingText>나의 호스팅</MyHostingText>
        <ReservationSection>
          {globalAccommodationList
            .filter(
              (data) =>
                data.memberId === Number(localStorage.getItem("memberId"))
            )
            .map((item) => {
              return (
                <AccommodationBox
                  key={item.resId}
                  onClick={() => onClickAccommodationFocus(item.accId)}
                >
                  <AccommodationCtn>
                    <ImgSection>
                      <img
                        src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50405823/original/6c046816-602a-47f7-93fe-d64dcdf7e16b.jpeg?im_w=720"
                        width="200px"
                      />
                    </ImgSection>
                    <ContentsSection>
                      <Addr>{item.accAddr}</Addr>
                      <Name>{item.accName}</Name>
                      <Desc>{item.description}</Desc>
                    </ContentsSection>
                  </AccommodationCtn>
                </AccommodationBox>
              );
            })}
        </ReservationSection>
      </WholeBox>
    </>
  );
};

export default UserProfile;

const Name = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Addr = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  margin-bottom: 10px;
`;

const ImgSection = styled.div`
  & img {
    border-radius: 10px;
  }
`;

const ContentsSection = styled.div`
  margin-left: 20px;
`;

const MyHostingText = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const WholeBox = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

const AccommodationBox = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  border: none;
  border-bottom: 1px solid lightgrey;
  background-color: transparent;
  margin-right: 10px;
  display: flex;
  cursor: pointer;
`;

const AccommodationCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ReservationSection = styled.div`
  display: flex;
  margin: 20px 0;
`;
