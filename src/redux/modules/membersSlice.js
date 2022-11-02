import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getMembers: {
    userEmail: "",
    lastName: "",
    fristName: "",
    gander: 1,
    phoneNum: "",
    userImg: "",
  },
};

const url = process.env.REACT_APP_API_URL;

export const __getMembers = createAsyncThunk(
  "members/getMembers",
  async (payload, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(`${url}/members`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putMembers = createAsyncThunk(
  "members/putMembers",
  async (payload, thunkAPI) => {
    const putMembersItem = {
      nickname: payload.nickname,
      phoneNum: payload.phoneNum,
      userImg: payload.userImg,
    };
    const formDate = new FormData();

    formDate.append(putMembersItem);

    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.put(`${url}/members`, formDate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteMembers = createAsyncThunk(
  "members/deleteMembers",
  async (payload, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.delete(`${url}/members`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: {
    /// get
    [__getMembers.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__getMembers.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__getMembers.rejected]: (state, action) => {
      console.log(action.payload);
    },
    //// put
    [__putMembers.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__putMembers.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__putMembers.rejected]: (state, action) => {
      console.log(action.payload);
    },
    /// delete
    [__deleteMembers.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__deleteMembers.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__deleteMembers.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default membersSlice.reducer;
