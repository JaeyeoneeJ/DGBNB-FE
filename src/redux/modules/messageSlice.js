import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
// import axios from "axios";
import {instance} from '../instance'

const initialState = {
  messages: [
    {
      accId: 1,
      accAddr: "서울시 마포구...",
      lat: 32.22222,
      lng: 32.22222,
    },
    {
      accId: 1,
      accAddr: "서울시 마포구...",
      lat: 32.22222,
      lng: 32.22222,
    },
  ],
  isSuccess: false,
  isLoading: false,
  error: null,
};

// const url = "";

export const __getMessages = createAsyncThunk(
  "messages/getMessages",
  async (payload, thunkAPI) => {
    try {
      console.log('hello')
      const token = localStorage.getItem("token");
      const { data } = await instance.get(`/notifications`, {
        headers: {
          Authorization: token,
        }
      });
      console.log(data)
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    ClearIsSuccess: (state, action) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [__getMessages.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__getMessages.fulfilled]: (state, action) => {
      state.messages = action.payload
    },
    [__getMessages.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { ClearIsSuccess } = messageSlice.actions;
export default messageSlice.reducer;
