import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  devTools: true, // TODO: disable in production
});
