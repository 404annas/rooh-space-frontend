import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, LoginResponse } from "../../types/auth.types";

const initialState: AuthState = {
    userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") as string)
        : null,

    token: localStorage.getItem("token")
        ? localStorage.getItem("token")
        : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<LoginResponse>) => {
            state.userInfo = action.payload.user;
            state.token = action.payload.token;

            localStorage.setItem("userInfo", JSON.stringify(action.payload.user));
            localStorage.setItem("token", action.payload.token);
        },
        clearCredentials: (state) => {
            state.userInfo = null;
            state.token = null;

            localStorage.removeItem("userInfo");
            localStorage.removeItem("token");
        },
    },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;