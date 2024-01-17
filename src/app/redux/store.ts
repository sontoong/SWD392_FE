import { configureStore } from "@reduxjs/toolkit";
import roleSlice from "./slice/roleSlice.ts";
import authReducer from "./slice/loginSlice";
import { headerSlice } from "./slice/headerSlice.ts";

export const store = configureStore({
  reducer: {
    roleCheck: roleSlice,
    auth: authReducer,
    header: headerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type PayloadAction<T, Type extends string, Payload = T> = {
  payload?: Payload;
  type: Type;
};
