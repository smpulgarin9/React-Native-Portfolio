import { configureStore } from "@reduxjs/toolkit";
import { AppApi } from "../api/AppApi";

export const store = configureStore({
    reducer: {
        [AppApi.reducerPath]: AppApi.reducer,
    },

    middleware: (getDefaultMiddeleware) => 
        getDefaultMiddeleware().concat(AppApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;