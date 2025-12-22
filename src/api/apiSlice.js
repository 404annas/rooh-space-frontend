import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "", // Empty because Proxy handles the URL
    credentials: "include" // This handles HttpOnly Cookies automatically
})

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: baseQuery,
    tagTypes: ["User", "Admin"],
    endpoints: (builder) => ({}),
})