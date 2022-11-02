import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getReviewsList: [
    {
      revId: 1,
      accId: 1,
      memberId: 1,
      revContent: "숙소 좋아요",
      revImg: "후기 이미지 url",
      createdAt: "2022.10.28 14:23",
      updatedAt: "2022.10.28 14:23",
      deletedAt: null,
    },
    {
      revId: 2,
      accId: 1,
      memberId: 2,
      revContent: "숙소 별로에요",
      revImg: "후기 이미지 url",
      createdAt: "2022.10.28 14:23",
      updatedAt: "2022.10.28 14:23",
      deletedAt: null,
    },
    {
      revId: 2,
      accId: 1,
      memberId: 2,
      revContent: "숙소 별로에요",
      revImg: "후기 이미지 url",
      createdAt: "2022.10.28 14:23",
      updatedAt: "2022.10.28 14:23",
      deletedAt: null,
    },
  ],
  getReview: {
    revId: 1,
    accId: 1,
    memberId: 1,
    revContent: "숙소 좋아요",
    revImg: "후기 이미지 url",
    createdAt: "2022.10.28 14:23",
    updatedAt: "2022.10.28 14:23",
    deletedAt: null,
  },
  postReview: {
    revId: 1,
    accId: 1,
    memberId: 1,
    revContent: "숙소 좋아요",
    revImg: "후기 이미지 url",
    createdAt: "2022.10.28 14:23",
    updatedAt: "2022.10.28 14:23",
    deletedAt: null,
  },
  putReview: {
    revId: 1,
    accNum: 1,
    memberNum: 1,
    revContent: "숙소 사실 별로에요",
    revImg: null,
    createdAt: "2022.10.28 14:23",
    updatedAt: "2022.10.28 14:27",
    deletedAt: null,
  },
};

const url = process.env.REACT_APP_API_URL;

export const __getReviewsList = createAsyncThunk(
  "reservation/getReservationList",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${url}/reviews/${payload.accId}`, {
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

export const __getReview = createAsyncThunk(
  "reservation/getReview",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${url}/reviews/${payload.accId}/${payload.revId}`,
        {
          params: {
            revId: payload.revId,
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//후기작성 체크 (폼데이터를 보낼때 key value로 받을 수 있는지..)

// req.params : accId

// req.body ( formData에 담아서)
// {
//    revContent: “숙소 좋아요”
//    revImg: “후기 이미지 파일”
// }

export const __postReview = createAsyncThunk(
  "reviews/postReview",
  async (payload, thunkAPI) => {
    const reviewItems = {
      revContent: payload.revContent,
      revImg: payload.revImg,
    };
    const formData = new FormData();
    formData.append(reviewItems);
    try {
      const { data } = await axios.post(`${url}/reviews/${payload.accId}`, {
        params: {
          accId: payload.accId,
        },
        data: {
          formData: formData,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putReview = createAsyncThunk(
  "reviews/putReview",
  async (payload, thunkAPI) => {
    const reviewItems = {
      revContent: payload.revContent,
      revImg: payload.revImg,
    };
    const formData = new FormData();
    formData.append(reviewItems);
    try {
      const { data } = await axios.put(`${url}/reviews/${payload.revId}`, {
        params: {
          accId: payload.accId,
        },
        data: {
          formData: formData,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${url}reviews/${payload.revId}`, {
        params: {
          revId: payload.revId,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    /// get List
    [__getReviewsList.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__getReviewsList.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__getReviewsList.rejected]: (state, action) => {
      console.log(action.payload);
    },
    //// get focus
    [__getReview.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__getReview.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__getReview.rejected]: (state, action) => {
      console.log(action.payload);
    },
    /// post
    [__postReview.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__postReview.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__postReview.rejected]: (state, action) => {
      console.log(action.payload);
    },
    /// put
    [__putReview.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__putReview.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__putReview.rejected]: (state, action) => {
      console.log(action.payload);
    },
    /// delete
    [__deleteReview.pending]: (state, action) => {
      console.log(action.payload);
    },
    [__deleteReview.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [__deleteReview.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default reviewsSlice.reducer;
