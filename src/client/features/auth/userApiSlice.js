import { apiSlice } from "../../../api/apiSlice";

const LOGIN_URL = "/api/users/auth/login";
const REGISTER_URL = "/api/users/register";
const LOGOUT_URL = "/api/users/logout";
const FORGOT_PASSWORD_URL = "/api/users/auth/forgot-password";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: LOGIN_URL,
                method: "POST",
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: REGISTER_URL,
                method: "POST",
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: LOGOUT_URL,
                method: "POST",
            })
        }),
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: FORGOT_PASSWORD_URL,
                method: "POST",
                body: data
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useForgotPasswordMutation } = userApiSlice;