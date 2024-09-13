import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlicer";

export const store = configureStore({
    reducer: {counter:counterReducer},
});


// This type represents the root state of the Redux store
// It is used to type-check state access in components and selectors
// It automatically updates when new slices are added to the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispaatch = typeof store.dispatch;