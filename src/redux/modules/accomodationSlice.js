import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getAccomodationList: [
    {
      accName: "숙소 이름1",
      accAddr: "숙소 주소1",
      maxPerson: 10,
      bed: 3,
      room: 3,
      toilet: 2,
      category: 1,
      thumbnail: "/images/acc1.png",
    },
    {
      accName: "숙소 이름1",
      accAddr: "숙소 주소1",
      maxPerson: 10,
      bed: 3,
      room: 3,
      toilet: 2,
      category: 1,
      thumbnail: "/images/acc1.png",
    },
    {
      accName: "숙소 이름1",
      accAddr: "숙소 주소1",
      maxPerson: 10,
      bed: 3,
      room: 3,
      toilet: 2,
      category: 1,
      thumbnail: "/images/acc1.png",
    },
  ],
  getAccomodationFocus: {
    accName: "숙소 이름",
    accAddr: "숙소 주소",
    maxPerson: 10,
    bed: 3,
    room: 3,
    toilet: 2,
    category: 1,
    thumbnail: "/images/acc1.png",
    accImg: ["/images/acc2.png", "/images/acc3.png", "/images/acc4.png"],
  },
};

const url = "";

export const __postAccomodations = createAsyncThunk(
  "accomodation/postAccomodations",
  async (payload, thunkAPI) => {
    const accomodationItem = {
      accName: payload.accName,
      accAddr: payload.accAddr,
      price: payload.price,
      facilities: payload.facilities,
      maxPerson: payload.maxPerson,
      bed: payload.bed,
      room: payload.room,
      toilet: payload.toilet,
      category: payload.category,
      accImg: payload.accImg, // array,
    };

    const formData = new FormData();
    formData.append(accomodationItem);

    try {
      const { data } = await axios.post(`${url}/accomodations`, formData);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getAccomodationList = createAsyncThunk(
  "accomodation/getAccomodationList",
  async (payload, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        `${url}/accomodations/${payload.accId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putAccomodation = createAsyncThunk(
  "accomodation/putAccomodation",
  async (payload, thunkAPI) => {
    const accomodationItems = {
      accName: payload.accName,
      accAddr: payload.accAddr,
      lat: payload.lat, //null
      lnt: payload.lnt, //null
      maxPerson: payload.maxPerson,
      bed: payload.bed,
      room: payload.room,
      toilet: payload.toilet,
      category: payload.category,
      thumbnail: payload.thumbnail,
      accImg: payload.accImg, // imageList,
    };
    const formData = new FormData();
    formData.append(accomodationItems);
    try {
      const { data } = await axios.put(
        `${url}/accomodations/${payload.accId}`,
        {
          params: {
            accId: payload.accId,
          },
          data: {
            formData: formData,
          },
        }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteAccomodation = createAsyncThunk(
  "accomodation/deleteAccomodation",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `${url}/accomodations/${payload.accId}`,
        {
          params: {
            accId: payload.accId,
          },
        }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const accomodationSlice = createSlice({
  name: "accomodation",
  initialState,
  reducers: {},
  extraReducers: {
    // post
    [__postAccomodations.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__postAccomodations.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__postAccomodations.rejected]: (state, action) => {
      console.log(action.payload);
    },
    /// get
    [__getAccomodationList.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__getAccomodationList.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__getAccomodationList.rejected]: (state, action) => {
      console.log(action.payload);
    },
    /// put
    [__putAccomodation.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__putAccomodation.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__putAccomodation.rejected]: (state, action) => {
      console.log(action.payload);
    },
    /// delete
    [__deleteAccomodation.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__deleteAccomodation.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__deleteAccomodation.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default accomodationSlice.reducer;
