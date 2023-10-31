import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const existingItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1, dishId: action.payload.id });
      }
      state.totalQuantity = Number(state.totalQuantity) + 1;
      state.totalAmount = Number(state.totalAmount) + Number(action.payload.price);
    },
    removeItem(state, action) {
      const itemToSubtract = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemToSubtract && itemToSubtract.quantity > 0) {
        itemToSubtract.quantity -= 1;
        state.totalQuantity = state.totalQuantity - 1;
        state.totalAmount = state.totalAmount - action.payload.price;
      }
    },
    deleteItem(state, action) {
      const itemToDelete = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemToDelete) {
        const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        state.cartItems = updatedCartItems;
        state.totalQuantity = state.totalQuantity - itemToDelete.quantity;
        state.totalAmount = state.totalAmount - itemToDelete.price * itemToDelete.quantity;
      }
    },
    resetCart(state, action) {
      state.cartItems = initialState.cartItems;
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
