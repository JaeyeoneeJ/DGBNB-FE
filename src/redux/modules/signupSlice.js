import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const __postSignup = createAsyncThunk(
  "signup/postSignup",
  async (payload, thunkAPI) => {
    try {
      const signupItems = {
        userEmail: payload.userEmail,
        password: payload.password,
        nickname: payload.nickname,
        name: payload.name,
        gender: payload.gender,
        phoneNum: payload.phoneNum,
        userImg: payload.userImg,
      };

      const jsonSignupItems = JSON.stringify(signupItems);

      const { data } = await axios.post(
        `${url}/members/signup`,
        jsonSignupItems,
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      );

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [__postLogin.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__postLogin.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__postLogin.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default signupSlice.reducer;
