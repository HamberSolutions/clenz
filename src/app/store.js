import { configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import adminReducer from '../features/admin/adminSlice';



export default configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    admin: adminReducer,
  },
});

