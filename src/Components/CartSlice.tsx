import { Product } from "./Types";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface cartItem extends Product{
    quantity:number
}

interface cartState{
    items:cartItem[]
}
const initialState:cartState={
    items:[]
}

//cartslice

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem: (state, action: PayloadAction<Product>) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
      },
      removeItem: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
      clearCart: (state) => {
        state.items = [];
      },
    },
  });
  
  export const { addItem, removeItem, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;