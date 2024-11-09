import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    // Use WordPress REST API base URL
    baseUrl: `${window.location.origin}/wp-json`,
    credentials: 'same-origin',
    prepareHeaders: (headers, { getState }) => {
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');

        // Add WordPress REST API nonce
        headers.set('X-WP-Nonce', wpApiSettings.nonce);

        return headers;
    }
})

const handleResponse = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    // console.log( result )

    return result
}

const API = createApi({
    baseQuery: handleResponse,
    endpoints: builder => ({}),
})

export default API