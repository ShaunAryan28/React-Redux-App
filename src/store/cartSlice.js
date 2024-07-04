import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartList: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      let existsItem = state.cartList.find((c) => c.id == action.payload.id);
      if (existsItem) {
        console.log("existed");
        state.cartList[state.cartList.indexOf(existsItem)].qt++;
      } else {
        state.cartList.push({ ...action.payload, qt: 1 });
      }
      
      const { totalPrice, totalQuantity } = calculateTotal(state.cartList);
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },
    resetItem: (state, action) => {
      state.cartList.splice(action.payload, 1);
      const { totalPrice, totalQuantity } = calculateTotal(state.cartList);
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },
    deleteItem: (state, action) => {
      const index = action.payload;
      if (state.cartList[index].qt > 1) {
        state.cartList[index].qt -= 1;
      } else {
        state.cartList.splice(index, 1);
      }
      const { totalPrice, totalQuantity } = calculateTotal(state.cartList);
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },
    cartaddItem: (state, action) => {
      const index = action.payload;
      
        state.cartList[index].qt += 1;
      
      const { totalPrice, totalQuantity } = calculateTotal(state.cartList);
      state.totalPrice = totalPrice;
      state.totalQuantity = totalQuantity;
    },
    resetCart: (state, action) => {
      state.cartList = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
})


export function calculateTotal(items) {
  let totalPrice = 0;
  let totalQuantity = 0;

  items.forEach((item) => {
    totalPrice += item.price * item.qt;
    totalQuantity += item.qt;
  });

  return { totalPrice, totalQuantity };
}
export const {addItem, deleteItem,resetCart,cartaddItem, resetItem} =CartSlice.actions
export default CartSlice.reducer;