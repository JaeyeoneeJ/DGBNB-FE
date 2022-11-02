import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  postSignupItems: {},
  responseSignupItem: {},
  isSignup: false,
};

const url = process.env.REACT_APP_API_URL;

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

      console.log(signupItems);

      // const jsonSignupItems = JSON.stringify(signupItems);
      // console.log(jsonSignupItems);

      const formdata = new FormData();
      formdata.append("memberEmail", payload.memberEmail);
      formdata.append("password", payload.password);
      formdata.append("nickname", payload.nickname);
      formdata.append("name", payload.name);
      formdata.append("phoneNum", payload.phoneNum);
      formdata.append("memberImg", payload.memberImg);

      // for (const key of formdata.entries()) {
      //   console.log(key);
      // }

      const { data } = await axios.post(`${url}/members/signup`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(data
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
      console.log(action.payload);
      state.postSignupItems = { ...state.postSignupItems, ...action.payload };
    },
  },
  extraReducers: {
    [__postSignup.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__postSignup.fulfilled]: (state, action) => {
      action.isSignup = true;
      alert("회원가입이 완료되었습니다");
      action.responseSignupItem = action.payload;
    },
    [__postSignup.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});
export const { getItems } = signupSlice.actions;
export default signupSlice.reducer;
