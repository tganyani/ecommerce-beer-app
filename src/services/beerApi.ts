import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const beerApi = createApi({
    reducerPath: 'beerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.punkapi.com/v2'}),
    endpoints:(builder) => ({
    getAllBeers: builder.query({ query: () => '/beers' })
})

})

export const { useGetAllBeersQuery } = beerApi