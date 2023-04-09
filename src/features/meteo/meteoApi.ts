import { Meteo } from "./types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export type MeteoType = Array<{
    Location: Location
    Meteo: Meteo
}>


export const meteoApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:24719' }),
    endpoints: (builder) => ({
        getMeteo: builder.query<MeteoType, string>({
            query: (location: string) => `weather/${location}`
        })
    }),
})

export const {    
    useGetMeteoQuery
} = meteoApi