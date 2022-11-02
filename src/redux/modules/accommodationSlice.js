import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
// import axios from "axios";
import { instance } from "../instance";

const initialState = {
  getAccommodationList: [],
  getAccomodationFocus: {},
  //호스팅 상세정보
  accommoInfo: {},
  hostInfo: {},
  //예약 상세 정보
};

// const url = "http://13.209.21.117:3000";

export const __postAccommodations = createAsyncThunk(
  "accommodation/postAccomodations",
  async (payload, thunkAPI) => {
    // const accommodationItem = {
    //   accName: payload.accName,
    //   accAddr: payload.accAddr,
    //   price: payload.price,
    //   facilities: payload.facilities,
    //   maxPerson: payload.maxPerson,
    //   bed: payload.bed,
    //   room: payload.room,
    //   bathroom: payload.bathroom,
    //   accImg: payload.accImg,
    //   description: payload.description, // array,
    // };

    const formdata = new FormData();
    formdata.append("accName", payload.accName);
    formdata.append("accAddr", payload.accAddr);
    formdata.append("price", payload.price);
    formdata.append("facilities", payload.facilities);
    formdata.append("maxPerson", payload.maxPerson);
    formdata.append("bed", payload.bed);
    formdata.append("room", payload.room);
    formdata.append("bathroom", payload.bathroom);
    formdata.append("accImg", payload.accImg);
    formdata.append("description", payload.description);

    const entriesImg = Object.entries(payload.accImg);
    console.log(entriesImg);
    const entriesValue = entriesImg.map((item) => {
      return item[1];
    });

    entriesValue.forEach((accImg) => formdata.append("accImg", accImg));

    // for (const key of formdata.entries()) {
    // 	console.log(key);
    // }

    try {
      const token = localStorage.getItem("token");

      const { data } = await instance.post(`/accommodations`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      });

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getAccommodationList = createAsyncThunk(
  "accommodation/getAccommodationList",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/accommodations`);

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getAccommodation = createAsyncThunk(
  "accommodation/getAccommodation",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/accommodations/${payload}`, {});
      console.log("숙소 상세 데이터_", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putAccommodation = createAsyncThunk(
  "accommodation/putAccomodation",
  async (payload, thunkAPI) => {
    const accomodationItems = {
      accName: payload.accName,
      accAddr: payload.accAddr,
      lat: payload.lat, //null
      lnt: payload.lnt, //null
      maxPerson: payload.maxPerson,
      bed: payload.bed,
      room: payload.room,
      bathroom: payload.bathroom,
      category: payload.category,
      thumbnail: payload.thumbnail,
      accImg: payload.accImg, // imageList,
    };
    const formData = new FormData();
    formData.append(accomodationItems);
    try {
      const { data } = await instance.put(
        `/accommodations/${payload.accId}`,
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

export const __deleteAccommodation = createAsyncThunk(
  "accommodation/deleteAccommodation",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    const NumberAccId = Number(payload);
    try {
      const { data } = await instance.delete(
        `/accommodations/${NumberAccId}`,
        {
          params: {
            accId: NumberAccId,
          },
          headers: {
            Authorization: `${token}`,
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

const accommodationSlice = createSlice({
  name: "accommodation",
  initialState,
  reducers: {},
  extraReducers: {
    // post
    [__postAccommodations.pending]: (state, action) => {
      console.log();
    },
    [__postAccommodations.fulfilled]: (state, action) => {
      console.log();
    },
    [__postAccommodations.rejected]: (state, action) => {
      console.log();
    },
    /// get
    [__getAccommodationList.pending]: (state, action) => {
      console.log();
    },
    [__getAccommodationList.fulfilled]: (state, action) => {
      state.getAccommodationList = action.payload;
    },
    [__getAccommodationList.rejected]: (state, action) => {
      console.log();
    },
    /// __getAccommodation
    [__getAccommodation.pending]: (state, action) => {
      console.log();
    },
    [__getAccommodation.fulfilled]: (state, action) => {
      state.getAccommodationFocus = action.payload;
    },
    [__getAccommodation.rejected]: (state, action) => {
      console.log();
    },
    /// put
    [__putAccommodation.pending]: (state, action) => {
      console.log();
    },
    [__putAccommodation.fulfilled]: (state, action) => {},
    [__putAccommodation.rejected]: (state, action) => {
      console.log();
    },
    /// delete
    [__deleteAccommodation.pending]: (state, action) => {},
    [__deleteAccommodation.fulfilled]: (state, action) => {
      alert(action.payload, "삭제가 완료되었습니다.");
    },
    [__deleteAccommodation.rejected]: (state, action) => {
      alert(action.payload, "삭제권한이 없습니다");
    },
  },
});

export default accommodationSlice.reducer;
