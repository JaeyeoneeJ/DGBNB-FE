import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/loginSlice";
import signup from "../modules/signupSlice";
import members from "../modules/membersSlice";
import reservation from "../modules/reservationSlice";
import accommodation from "../modules/accomodationSlice";
import reviews from "../modules/reviewsSlice";
import likes from "../modules/likedAccomodationSlice";

const store = configureStore({
  reducer: {
    login: login,
    signup: signup,
    members: members,
    reservation: reservation,
    accommodation: accommodation,
    reviews: reviews,
    likes: likes,
  },
});

export default store;
