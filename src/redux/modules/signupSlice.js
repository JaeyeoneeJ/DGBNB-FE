import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postSignupItems: {},
};

const url = "http://13.209.21.117:3000";

export const __postSignup = createAsyncThunk(
  "signup/postSignup",
  async (payload, thunkAPI) => {
    try {
      const signupItems = {
        memberEmail: payload.memberEmail,
        password: payload.password,
        nickname: payload.nickname,
        name: payload.name,
        phoneNum: payload.phoneNum,
        memberImg: payload.memberImg,
      };

      const jsonSignupItems = JSON.stringify(signupItems);
      // const formdata = new FormData();
      // formdata.append(jsonSignupItems);

      const { data } = await axios.post(`${url}/members/signup`, signupItems);

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    getItems: (state, action) => {
      state.postSignupItems = { ...state.postSignupItems, ...action.payload };
    },
  },
  extraReducers: {
    [__postSignup.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__postSignup.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__postSignup.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});
export const { getItems } = signupSlice.actions;
export default signupSlice.reducer;
