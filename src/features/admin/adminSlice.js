import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";



export const pendingorders = createAsyncThunk(
  'admin/pendingorders',
  async (orderData, {rejectWithValue}) => {
    try {
      // Call API to subscribe user
      const response = await adminService.pendingorders(orderData);
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

export const completedorders = createAsyncThunk(
  'admin/completedorders',
  async (completedordersData, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await adminService.completedorders(completedordersData);
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

export const orderstatus = createAsyncThunk(
  'admin/orderstatus',
  async (statusData, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await adminService.orderstatus(statusData);
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

export const getcount = createAsyncThunk(
  'admin/getcount',
  async (countData, { rejectWithValue }) => {
    try {
      // Call API to install user
      const response = await adminService.getcount(countData);
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


export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    pendingOrders:[],
    completedOrders:[],
    orderStatus: [],
    getCount:[],
    isLoading: false,
    isError: null,
	message: "",
  },
  reducers:{
    setpendingOrders: (state, action) => {
      state.pendingOrders = action.payload;
    },
    setcompletedOrders: (state, action) => {
      state.completedOrders = action.payload;
    },
    setOrderStatus: (state, action) => {
      state.orderStatus = action.payload;
    },
    setgetCount: (state, action) => {
      state.getCount = action.payload;
    },
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(pendingorders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(pendingorders.fulfilled, (state, action) => {
        console.log({action})
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.meta.arg;
      })
      .addCase(pendingorders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.meta.arg;
        state.user = null
      })
      .addCase(completedorders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(completedorders.fulfilled, (state, action) => {
        console.log({action})
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(completedorders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null
      })
      .addCase(orderstatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(completedorders.fulfilled, (state, action) => {
        console.log({action})
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(orderstatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null
      })
      .addCase(getcount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getcount.fulfilled, (state, action) => {
        console.log({action})
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getcount.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null
      })
  },
});

export const { setpendingOrders, setcompletedOrders, setOrderStatus, setgetCount  } = adminSlice.actions;

export default adminSlice.reducer;
