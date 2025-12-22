import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/client/auth/authSlice"
import adminAuthReducer from "../features/admin/auth/adminAuthSlice"
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer, // Auth State Slice
        adminAuth: adminAuthReducer, // Admin Auth State Slice
        [apiSlice.reducerPath]: apiSlice.reducer, // RTK Query API
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})