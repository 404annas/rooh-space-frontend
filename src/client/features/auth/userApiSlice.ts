import { apiSlice } from "../../../api/apiSlice";
import { LoginCredentials, RegisterData, ForgotPasswordData, User } from "../../../client/types/auth.types";

const LOGIN_URL = "/api/users/auth/login";
const REGISTER_URL = "/api/users/register";
const LOGOUT_URL = "/api/users/logout";
const FORGOT_PASSWORD_URL = "/api/users/auth/forgot-password";
const GET_USER_PROFILE = "/api/users/profile";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data: LoginCredentials) => ({
                url: LOGIN_URL,
                method: "POST",
                body: data
            })
        }),
        register: builder.mutation({
            query: (data: RegisterData) => ({
                url: REGISTER_URL,
                method: "POST",
                body: data
            })
        }),
        logout: builder.mutation<{message: string}, void>({
            query: () => ({
                url: LOGOUT_URL,
                method: "POST",
            })
        }),
        forgotPassword: builder.mutation({
            query: (data: ForgotPasswordData) => ({
                url: FORGOT_PASSWORD_URL,
                method: "POST",
                body: data
            })
        }),
        getUserProfile: builder.query<{ user: User }, void>({
            query: () => ({
                url: GET_USER_PROFILE,
                method: "GET"
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useForgotPasswordMutation, useGetUserProfileQuery } = userApiSlice;