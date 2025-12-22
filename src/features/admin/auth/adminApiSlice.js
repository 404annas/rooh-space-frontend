import { apiSlice } from "../../../api/apiSlice";

const ADMIN_LOGIN_URL = "/api/admin/auth/login";
const ADMIN_LOGOUT_URL = "/api/admin/auth/logout";

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        adminLogin: builder.mutation({
            query: (credentials) => ({
                url: ADMIN_LOGIN_URL,
                method: "POST",
                body: credentials,
            })
        }),
        adminLogout: builder.mutation({
            query: () => ({
                url: ADMIN_LOGOUT_URL,
                method: "POST",
            })
        })
    })
})

export const { useAdminLoginMutation, useAdminLogoutMutation } = adminApiSlice;