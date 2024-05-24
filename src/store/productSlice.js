import { createSlice } from "@reduxjs/toolkit";
 

const productSlice = createSlice({
  name: "Product",
  initialState: {
    productList: [
      { id: 1, name: "Cadbury", price: 100 },
      { id: 2, name: "Biscuit", price: 80 },
      { id: 3, name: "Candle", price: 30 },
      { id: 4, name: "Wine", price: 500 },
      { id: 5, name: "Candy", price: 5 },
      { id: 6, name: "Brush", price: 50 },
    ],
  },
  reducers: {},
})

export default productSlice.reducer
