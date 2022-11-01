import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getAccomodationList } from "../redux/modules/accommodationSlice";
import { __getReservationList } from "../redux/modules/reservationSlice";

const UserPofile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getAccomodationList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getReservationList());
  }, [dispatch]);

  const globalReservationList = useSelector(
    (state) => state.reservation.getReservationList
  );

  const globalAccommodationList = useSelector(
    (state) => state.accommodation.getAccommodationList
  );

  console.log("예약 목록__", globalReservationList);
  console.log("숙소 목록__", globalAccommodationList);
  return (
    <>
      <WholeBox>
        <ReservationSection>
          {globalReservationList.map((item) => {
            return (
              <ReservationBox>
                <div>
                  <label>등록일</label>
                  {item.createdAt}
                </div>
                <div>
                  <label>체크인</label>
                  {item.resCheckin}
                </div>
                <div>
                  <label>체크아웃</label>
                  {item.resCheckOut}
                </div>
              </ReservationBox>
            );
          })}
        </ReservationSection>
        <AccommodationSection>
          {globalAccommodationList.map((item) => {
            return (
              <AccommodationBox>
                <div>
                  <label>숙소 이름</label>
                  {item.accName}
                </div>
                <div>
                  <label>숙소 주소</label>
                  {item.accAddr}
                </div>
                <div>
                  <label>숙소 가격</label>
                  {item.price}
                </div>
                <div>
                  <label>숙소 이미지</label>
                  {item.accImg}
                </div>
              </AccommodationBox>
            );
          })}
        </AccommodationSection>
      </WholeBox>
    </>
  );
};

export default UserPofile;

const WholeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const ReservationBox = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 20px;
  margin-right: 10px;
`;

const AccommodationBox = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 20px;
  margin-right: 10px;
`;

const ReservationSection = styled.div`
  display: flex;
  margin: 20px 0;
`;

const AccommodationSection = styled.div`
  display: flex;
`;
// //예약 목록
// [
//   {
//     accId: 1,
//     accName: "숙소 이름11",
//     accAddr: "숙소 주소11",
//     price: 80000,
//     rating: 8.12,
//     maxPerson: 5,
//     bed: 3,
//     room: 3,
//     accImg: "/images/acc1.png",
//   },
//   {
//     accId: 2,
//     accName: "숙소 이름22",
//     accAddr: "숙소 주소22",
//     price: 200000,
//     rating: 9.54,
//     maxPerson: 10,
//     bed: 4,
//     room: 4,
//     accImg:
//       "/images/acc1.png, /images/acc2.png, /images/acc3.png, /images/acc4.png",
//   },
//   {
//     accId: 3,
//     accName: "숙소 이름33",
//     accAddr: "숙소 주소33",
//     price: 150000,
//     rating: 8.85,
//     maxPerson: 7,
//     bed: 4,
//     room: 5,
//     accImg:
//       "/images/acc1.png, /images/acc2.png, /images/acc3.png, /images/acc4.png",
//   },
// ];

// //숙소 목록
// [
//     {
//     "resId" : 10,
//     "accId" : 1,
//     "memberId" : 1,
//     "personNum" : 4,
//     "resCheckin : "2022-10-28",
//     "resCheckOut: "2022-10-29",
//     "createdAt" : "2022-10-28",
//     "updatedAt" : "2022-10-28",
//     "deletedAt" : "2022-10-28"
//     },
//     {
//     "resId" : 9,
//     "accId" : 2,
//     "memberId" : 2,
//     "personNum" : 3,
//     "resCheckin : "2022-10-28",
//     "resCheckOut: "2022-10-29",
//     "createdAt" : "2022-10-28",
//     "updatedAt" : "2022-10-28",
//     "deletedAt" : "2022-10-28”
//     }
//     ]
