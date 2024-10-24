import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("productsForLS")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload: newItem
      const newItem = {
        ...action.payload,
        amount: 1,
        totalPrice: action.payload.price,
      };
      state.cart.push(newItem);
    },
    deleteItem(state, action) {
      // payload: id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateItemAmount(state, action) {
      // payload: id, amount
      const { id, amount } = action.payload;

      const currentItem = state.cart.find((item) => item.id === id);
      currentItem.amount = amount;
      currentItem.totalPrice = currentItem.price * currentItem.amount;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;

export const { addItem, deleteItem, updateItemAmount, clearCart } =
  cartSlice.actions;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getShippingPrice = (state) => {
  const needsShipping = state.cart.cart.some((item) => !item.free_shipping);
  return needsShipping ? 15 : 0;
};
