
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { meteoApi } from "../features/meteo/meteoApi";

export const store = configureStore({
    reducer: {
        [meteoApi.reducerPath]: meteoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(meteoApi.middleware),
})


setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch