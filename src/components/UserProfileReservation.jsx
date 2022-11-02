import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getReservation } from "../redux/modules/reservationSlice";

const UserProfileReservation = () => {
  const { id } = useParams();
  const accId = id;
  const globalReservaionFocus = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(__getReservation(accId));
  }, [dispatch]);
  //
  console.log(globalReservaionFocus);
  return <div>UserProfileReservation</div>;
};

export default UserProfileReservation;
