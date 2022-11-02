import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getAccommodation } from "../redux/modules/accommodationSlice";

const UserProfileHosting = () => {
  const { id } = useParams();
  const accId = id;
  console.log(accId);
  const dispatch = useDispatch();
  const globalFocusAccommoInfo = useSelector(
    (state) => state.accommodation.accommoInfo
  );
  const globalFocusHostInfo = useSelector(
    (state) => state.accommodation.hostInfo
  );
  console.log(globalFocusAccommoInfo, globalFocusHostInfo);
  //   console.log("숙소 상세 데이터__", globalFocusAccommodation);
  useEffect(() => {
    dispatch(__getAccommodation(accId));
  }, []);
  // const img = globalFocusAccommoInfo?.accImg.split(", ");
  // console.log(img);
  return (
    <div>
      <div>안녕 여기는 내가 호스팅한 숙소 상세페이지!</div>;
      <div>
        <div>숙소 이름 : {globalFocusAccommoInfo.accName}</div>
        <div>숙소 주소 : {globalFocusAccommoInfo.accAddr}</div>

        <div>
          숙소 이미지 :
          {/* {img.map((item) => {
            <img src={item.img} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default UserProfileHosting;
