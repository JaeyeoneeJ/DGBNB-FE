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
                  <div>
                    <div>
                      <img
                        src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50405823/original/6c046816-602a-47f7-93fe-d64dcdf7e16b.jpeg?im_w=720"
                        width="200px"
                      />
                    </div>
                    <div>
                      <div>{item.accAddr}</div>
                      <div>{item.accName}</div>
                      <div>{item.description}</div>
                    </div>
                  </div>
                </AccommodationBox>
              );
            })}
        </ReservationSection>
      </WholeBox>
    </>
  );
};

export default UserProfile;

const WholeBox = styled.div`
  margin-top: 98px;
  display: flex;
  flex-direction: column;
`;

const AccommodationBox = styled.button`
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
`;

const ReservationSection = styled.div`
  display: flex;
  margin: 20px 0;
`;
