import { configureStore } from "@reduxjs/toolkit";
import { formBuilderSlice } from "./slices";

export const store = configureStore({
    reducer: {
        formBuilder: formBuilderSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
