import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getReservationList: [],
  getReservationFocus: [
    {
      //숙소 내용들 추가될 예정
      resId: 10,
      accId: 1,
      userId: 1,
      personNum: 4,
      resCheckin: "2022-10-28",
      resCheckOut: "2022-10-29",
      createdAt: "2022-10-28",
      updatedAt: "2022-10-28",
      deletedAt: "2022-10-28",
    },
  ],
};

const url = process.env.REACT_APP_API_URL;

export const __getReservationList = createAsyncThunk(
  "reservation/getReservationList",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`${url}/reservations/length/${payload}`, {
        params: {
          memberId: payload,
        },
      });
      console.log("예약 데이터ㅡ", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getReservation = createAsyncThunk(
  "reservation/getReservation",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${url}/reservations/${payload}`, {
        params: {
          accId: payload,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postReservation = createAsyncThunk(
  "reservation/postReservation",
  async (payload, thunkAPI) => {
    const reservationItems = {
      resId: payload.resId,
      accId: payload.userId,
      userId: payload.userId,
      personNum: payload.personNum,
      resChecki: payload.resChecki,
      resCheckOut: payload.resCheckOut,
      createdAt: payload.createdAt,
      updatedAt: payload.updatedAt,
      deletedAt: payload.deletedAt,
    };

    const formData = new FormData();

    formData.append(reservationItems);

    try {
      const { data } = await axios.post(`${url}/reservations`, formData);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putReservation = createAsyncThunk(
  "reservation/putReservation",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.put(`${url}/reservations/${payload.accId}`, {
        params: {
          accId: payload.accId,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteReservation = createAsyncThunk(
  "reservation/deleteReservation",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `${url}/reservations/${payload.accId}`,
        {
          params: {
            accId: payload.accId,
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers: {
    /// get
    [__getReservationList.pending]: (state, action) => {
      // console.log(action.payload);
    },
    [__getReservationList.fulfilled]: (state, action) => {
      state.getReservationList = action.payload;
    },
    [__getReservationList.rejected]: (state, action) => {
      // console.log(action.payload);
    },
    ///focus get
    [__getReservation.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__getReservation.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__getReservation.rejected]: (state, action) => {
      console.log(action.payload);
    },
    //// post
    [__postReservation.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__postReservation.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__postReservation.rejected]: (state, action) => {
      console.log(action.payload);
    },
    /// put
    [__putReservation.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__putReservation.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__putReservation.rejected]: (state, action) => {
      console.log(action.payload);
    },
    /// delete
    [__deleteReservation.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__deleteReservation.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__deleteReservation.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default reservationSlice.reducer;
