import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
// import axios from "axios";
import { instance } from "../instance";

const initialState = {
  getAccommodationList: [],
  getAccommodationFocus: {},
  //호스팅 상세정보
  accommoInfo: {},
  hostInfo: {},
  //예약 상세 정보
  isSuccess: false,
  isLoading: false,
  isAuth: null,
  isDeleteAuth: null,
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
    // console.log(entriesImg);
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
      // console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getAccommodation = createAsyncThunk(
  "accommodation/getAccommodation",
  async (payload, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      // console.log(token);

      let data = {};
      if (token === null) {
        data = await instance.get(`/accommodations/${payload}`);
      } else {
        data = await instance.get(`/accommodations/${payload}`, {
          headers: {
            Authorization: `${token}`,
          },
        });
      }

      // console.log("숙소 상세 데이터_", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __patchAccommodation = createAsyncThunk(
  "accommodation/patchAccomodation",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("accName", payload.accName);
    formData.append("accAddr", payload.accAddr);

    formData.append("lat", null);
    formData.append("lnt", null);
    formData.append("category", null);

    formData.append("maxPerson", payload.maxPerson);
    formData.append("bed", payload.bed);
    formData.append("room", payload.room);
    formData.append("bathroom", payload.bathroom);
    formData.append("thumbnail", payload.thumbnail);
    // console.log(payload.accImg);
    const entriesImg = Object.entries(payload.accImg);
    const entriesValue = entriesImg.map((item) => {
      return item[1];
    });
    entriesValue.forEach((accImg) => formData.append("accImg", accImg));
    try {
      const { data } = await instance.patch(
        `/accommodations/${payload.accId}`,
        formData,
        {
          params: {
            accId: payload.accId,
          },
          headers: { Authorization: `${token}` },
        }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteAccommodation = createAsyncThunk(
  "accommodation/deleteAccommodation",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    const NumberAccId = Number(payload);
    console.log(NumberAccId);
    try {
      const { data } = await instance.delete(`/accommodations/${NumberAccId}`, {
        params: {
          accId: NumberAccId,
        },
        headers: {
          Authorization: `${token}`,
        },
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const accommodationSlice = createSlice({
  name: "accommodation",
  initialState,
  reducers: {
    clearIsSuccess: (state, action) => {
      state.isSuccess = false;
    },
    resetAuth: (state, action) => {
      state.isAuth = null;
    },
    resetDeleteAuth: (state, action) => {
      state.isDeleteAuth = null;
    },
  },
  extraReducers: {
    // post
    [__postAccommodations.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postAccommodations.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      alert("호스팅 등록이 성공적으로 진행되었습니다.");
    },
    [__postAccommodations.rejected]: (state, action) => {
      state.isLoading = false;
    },
    /// get
    [__getAccommodationList.pending]: (state, action) => {},
    [__getAccommodationList.fulfilled]: (state, action) => {
      state.getAccommodationList = action.payload;
    },
    [__getAccommodationList.rejected]: (state, action) => {},
    /// __getAccommodation
    [__getAccommodation.pending]: (state, action) => {},
    [__getAccommodation.fulfilled]: (state, action) => {
      state.getAccommodationFocus = action.payload;
    },
    [__getAccommodation.rejected]: (state, action) => {},
    /// put
    [__patchAccommodation.pending]: (state, action) => {},
    [__patchAccommodation.fulfilled]: (state, action) => {
      state.isAuth = true;
    },
    [__patchAccommodation.rejected]: (state, action) => {
      state.isAuth = false;
    },
    /// delete
    [__deleteAccommodation.pending]: (state, action) => {},
    [__deleteAccommodation.fulfilled]: (state, action) => {
      state.isDeleteAuth = true;
    },
    [__deleteAccommodation.rejected]: (state, action) => {
      state.isDeleteAuth = false;
      alert(action.payload, "삭제권한이 없습니다");
    },
  },
});

export const { clearIsSuccess, resetAuth, resetDeleteAuth } =
  accommodationSlice.actions;
export default accommodationSlice.reducer;
