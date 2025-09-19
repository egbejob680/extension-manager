import { configureStore } from "@reduxjs/toolkit";
import extensionReducer from "./extensionSlice";

export const store = configureStore({
  reducer: {
    extension: extensionReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
