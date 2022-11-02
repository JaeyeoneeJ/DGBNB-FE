import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../instance";

const initialState = {
  userInfo: {
    memberEmail: "user@email.com",
    password: "password123",
  },
  loginInfo: {
    loginInfo: {
      memberId: 18,
      memberEmail: "222222",
      nickname: "이이이",
      name: "이이이",
      gender: null,
      phoneNum: "222",
      memberImg:
        "https://week6-project-bucket.s3.ap-northeast-2.amazonaws.com/cloneCoding/1667306772727_IU_1.jpeg",
      createdAt: "2022-11-01T12:46:12.000Z",
      deletedAt: null,
    },
    notiCount: 3,
  },
  isLogin: false,
  userNickname: "",
  error: "",
};

const url = process.env.REACT_APP_API_URL;

export const __postLogin = createAsyncThunk(
  "login/postLogin",
  async (payload, thunkAPI) => {
    const loginItems = {
      memberEmail: payload.memberEmail,
      password: payload.password,
    };
    try {
      const { data } = await axios.post(`${url}/members/login`, loginItems, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
      console.log("로그인 데이터", data);
      const localSet = window.localStorage;
      const token = data.loginData.token;
      const memberImg = data.loginData.memberImg;
      const memberId = data.loginData.memberId;
      const nickname = data.loginData.nickname;
      const memberEmail = data.loginData.memberEmail;
      localSet.setItem("token", token);
      localSet.setItem("memberImg", memberImg);
      localSet.setItem("memberId", memberId);
      localSet.setItem("nickname", nickname);
      localSet.setItem("memberEmail", memberEmail);
      return thunkAPI.fulfillWithValue(data.loginData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getLoginInfo = createAsyncThunk(
  "login/getLoginInfo",
  async (payload, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await instance.get(`/members/loginInfo`, {
        headers: {
          Authorization: token,
        },
      });
      // console.log("로그인 유저 정보", data.data);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetIsLogin: (state) => {
      state.isLogin = false;
    },
  },
  extraReducers: {
    [__postLogin.fulfilled]: (state, action) => {
      state.isLogin = true;
      state.userNickname = action.payload.nickname;
    },
    [__postLogin.rejected]: (state, action) => {
      state.error = action.error;
      alert("유효하지 않은 로그인 정보입니다.");
    },
    [__getLoginInfo.fulfilled]: (state, action) => {
      state.loginInfo = action.payload;
    },
    [__getLoginInfo.rejected]: (state, action) => {
      state.error = action.error;
      alert("유저의 정보를 불러올 수 없습니다.");
    },
  },
});

export const { resetIsLogin } = loginSlice.actions;
export default loginSlice.reducer;
