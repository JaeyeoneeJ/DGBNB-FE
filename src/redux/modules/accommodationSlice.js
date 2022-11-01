import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../instance";

const initialState = {
  getAccommodationList: [
    {
      accId: 1,
      accName: "숙소 이름1",
      accAddr: "숙소 주소1",
      maxPerson: 10,
      bed: 3,
      room: 3,
      bathroom: 2,
      category: 1,
      AccommodationsPictures: [
        {
          thumbnail: "/images/acc1.png",
        }
      ],
    },
  ],
  getAccommodationFocus: {
    accName: "숙소 이름",
    accAddr: "숙소 주소",
    maxPerson: 10,
    bed: 3,
    room: 3,
    bathroom: 2,
    category: 1,
    thumbnail: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-684571394601112089/original/888156a5-b3ed-4d01-ba11-dfbaf97c316b.jpeg?im_w=960",
    accImg: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-684571394601112089/original/e3690203-a2da-475b-94d6-6991c144ad3c.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-684571394601112089/original/0ca0188c-530b-44d7-8811-eff6b298502c.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-684571394601112089/original/9eb1b66a-7801-423f-bad6-61ef34680173.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-684571394601112089/original/933001c7-a150-47cb-8131-9128965925d4.jpeg?im_w=1200"
    ],
  },
};

const url = "http://13.209.21.117:3000";

export const __postAccommodations = createAsyncThunk(
  "accommodation/postAccommodations",
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

    const formdata = new FormData()
    formdata.append('accName', payload.accName,)
    formdata.append('accAddr', payload.accAddr,)
    formdata.append('price', payload.price,)
    formdata.append('facilities', payload.facilities,)
    formdata.append('maxPerson', payload.maxPerson,)
    formdata.append('bed', payload.bed,)
    formdata.append('room', payload.room,)
    formdata.append('bathroom', payload.bathroom,)
    formdata.append('accImg', payload.accImg,)
    formdata.append('description', payload.description,)

		const entriesImg = Object.entries(payload.accImg)
		console.log(entriesImg)
		const entriesValue = entriesImg.map(item=>{
			return item[1];
		})

		entriesValue.forEach((accImg)=>formdata.append('accImg', accImg))

    // for (const key of formdata.entries()) {
		// 	console.log(key);
		// }
    
    try {
      const token = localStorage.getItem('token')
      
      const { data } = await axios.post(
        `${url}/accommodations`,
        formdata,  
        { headers: { "Content-Type": 'multipart/form-data', Authorization: token } }
      );
      
      
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
      // const token = localStorage.getItem("token");
      const data = await instance.get(`/accommodations`);
      console.log(data)
      console.log("숙소 데이터__", data.data);
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
      // const token = localStorage.getItem("token");
      const data = await instance.get(`/accommodations/${payload}`);
      console.log(data)
      console.log("숙소 상세 데이터__", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __putAccommodation = createAsyncThunk(
  "accommodation/putAccommodation",
  async (payload, thunkAPI) => {
    const accommodationItems = {
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
    formData.append(accommodationItems);
    try {
      const { data } = await axios.put(
        `${url}/accommodations/${payload.accId}`,
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
    try {
      const { data } = await axios.delete(
        `${url}/accommodations/${payload.accId}`,
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
    [__putAccommodation.fulfilled]: (state, action) => {
      console.log();
    },
    [__putAccommodation.rejected]: (state, action) => {
      console.log();
    },
    /// delete
    [__deleteAccommodation.pending]: (state, action) => {
      console.log();
    },
    [__deleteAccommodation.fulfilled]: (state, action) => {
      console.log();
    },
    [__deleteAccommodation.rejected]: (state, action) => {
      console.log();
    },
  },
});

export default accommodationSlice.reducer;
