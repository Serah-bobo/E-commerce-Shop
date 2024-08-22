import CartSlice from "./CartSlice";
import { configureStore } from "@reduxjs/toolkit";


export const Store = configureStore({
    reducer: {
      cart: CartSlice,
    },
  });
  
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

