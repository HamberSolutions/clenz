import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";



export const PendingOrders = createAsyncThunk(
  'admin/PendingOrders',
  async (_, { rejectWithValue }) => {
    try {
      // Call API to subscribe user
      const response = await adminService.PendingOrders();
      console.log({ response })
      return response;
    } catch (error) {
      console.log({ error });
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log({ message });
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
      console.log({ error });
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log({ message });
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
      console.log({ error });
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log({ message });
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
      console.log({ error });
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log({ message });
      return rejectWithValue(message);
    }
  }
);


export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    pendingOrders: [],
    completedOrders: [],
    orderStatus: [],
    getCount: [],
    slots:[],
    isLoading: false,
    isError: null,
    message: "",
  },
  reducers: {
    setPendingOrders: (state, action) => {
      state.pendingOrders = action.payload;
    },
    setCompletedOrders: (state, action) => {
      state.completedOrders = action.payload;
    },
    setOrderStatus: (state, action) => {
      state.orderStatus = action.payload;
    },
    setGetCount: (state, action) => {
      state.getCount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(PendingOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(PendingOrders.fulfilled, (state, action) => {
        console.log({ action })
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Pending orders fetched successfully';
        state.pendingOrders = action.payload;
      })
      .addCase(PendingOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message;
        state.pendingOrders = null
      })
      .addCase(completedorders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(completedorders.fulfilled, (state, action) => {
        console.log({ action })
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
      .addCase(orderstatus.fulfilled, (state, action) => {
        console.log({ action })
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
        console.log({ action })
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

export const { setPendingOrders, setCompletedOrders, setOrderStatus, setGetCount } = adminSlice.actions;

export default adminSlice.reducer;
