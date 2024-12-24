import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.carts.push({
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload?.unitPrice * 1,
      });
    },
    updateCart(state) {
      state.carts = [];
    },

    deleteFromCart(state, action) {
      state.carts = state.carts.filter(
        (item) => item.pizzaId != action.payload
      );
    },
  },
});

export const { addToCart, updateCart, deleteFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getTotalQuantity = (state) =>
  state.cart?.carts?.reduce((acc, cur) => acc + cur?.quantity, 0);

export const getTotalPrice = (state) =>
  state.cart?.carts?.reduce((calc, cur) => calc + cur?.totalPrice, 0);
