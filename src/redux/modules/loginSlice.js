import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userEmail: "user@email.com",
  password: "password123",
};

const url = "";

export const __postLogin = createAsyncThunk(
  "posts/postLogin",
  async (payload, thunkAPI) => {
    const loginItems = {
      userEmail: payload.userEmail,
      password: payload.password,
    };

    const jsonLoginItems = JSON.stringify(loginItems);

    try {
      const { data } = await axios.post(
        `${url}/members/login`,
        jsonLoginItems,
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      );
      const { token } = await data;
      const localSet = window.localStorage;
      localSet.setItem("token", token);

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
