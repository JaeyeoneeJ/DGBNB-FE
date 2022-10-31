import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  memberEmail: "user@email.com",
  password: "password123",
};

const url = "http://13.209.21.117:3000";

export const __postLogin = createAsyncThunk(
  "posts/postLogin",
  async (payload, thunkAPI) => {
    const loginItems = {
      memberEmail: payload.memberEmail,
      password: payload.password,
    };

    // const jsonLoginItems = JSON.stringify(loginItems);

    try {
      const { data } = await axios.post(`${url}/members/login`, loginItems, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
      console.log(data);
      // const { token } = await data;
      // const localSet = window.localStorage;
      // localSet.setItem("token", token);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
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

export default loginSlice.reducer;
