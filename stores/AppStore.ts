import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../services/AppApi";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },

    middleware: (getDefaultMiddeleware) => 
        getDefaultMiddeleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;