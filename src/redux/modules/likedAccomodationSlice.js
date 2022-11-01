import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getLikedAccomodationList: [
    {
      accId: 1,
      accAddr: "서울시 마포구...",
      lat: 32.22222,
      lng: 32.22222,
      maxPerson: 4,
      bed: 2,
      room: 3,
      toilet: 2,
      category: ["편안한", "저렴한", "전망좋은", "펜션"],
      thumnail: "숙소 썸넴일 이미지 url",
      likesCount: 4,
      createdAt: "2022.09.05 10:10",
      updatedAt: "2022.09.05 10:10",
      deletedAt: null,
    },
    {
      accId: 1,
      accAddr: "서울시 마포구...",
      lat: 32.22222,
      lng: 32.22222,
      maxPerson: 4,
      bed: 2,
      room: 3,
      toilet: 2,
      category: ["편안한", "저렴한", "전망좋은", "펜션"],
      thumnail: "숙소 썸넴일 이미지 url",
      likesCount: 4,
      createdAt: "2022.09.05 10:10",
      updatedAt: "2022.09.05 10:10",
      deletedAt: null,
    },
  ],
};

const url = "";

export const __getLikedAccomodationList = createAsyncThunk(
  "likes/getLikedAccomodationList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${url}/likes/${payload.userId}`, {
        params: {
          userId: payload.userId,
        },
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putLikedAccomodation = createAsyncThunk(
  "likes/putLikedAccomodationList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.put(`${url}/likes/${payload.accId}`, {
        params: {
          userId: payload.userId,
        },
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {},
  extraReducers: {
    [__getLikedAccomodationList.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__getLikedAccomodationList.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__getLikedAccomodationList.rejected]: (state, action) => {
      console.log(action.payload);
    },
    ///
    [__putLikedAccomodation.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__putLikedAccomodation.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__putLikedAccomodation.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default loginSlice.reducer;
