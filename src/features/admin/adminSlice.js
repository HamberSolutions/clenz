import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import dashboardService from "./dashboardService";



export const orderbook = createAsyncThunk(
  'auth/orderbook',
  async (orderData, {rejectWithValue}) => {
    try {
      // Call API to subscribe user
      const response = await dashboardService.orderbook(orderData);
      console.log({response})
      return response.data;
    } catch (error) {
      console.log({error});
      const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              console.log({message});
      return rejectWithValue(message);
      
    }
    } 
);

export const getslots = createAsyncThunk(
  'auth/getslots',
  async (slotsData, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await dashboardService.getslots(slotsData);
      return response.data;
    } catch (error) {
      console.log({error});
      const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              console.log({message});
      return rejectWithValue(message);
    }
  }
);


export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    getSlots:[],
    isLoading: false,
    isError: null,
	message: "",
  },
  reducers:{
    setGetSlots: (state, action) => {
      state.getSlots = action.payload
	}
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(orderbook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(orderbook.fulfilled, (state, action) => {
        console.log({action})
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.meta.arg;
      })
      .addCase(orderbook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.meta.arg;
        state.user = null
      })
      .addCase(getslots.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getslots.fulfilled, (state, action) => {
        console.log({action})
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getslots.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null
      })
  },
});

export default dashboardSlice.reducer;
