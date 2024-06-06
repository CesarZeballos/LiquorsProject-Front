import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from "@/interfaces/interfaz";

const initialState: ProductsState = {
  data: [],
};

/* este es el crud redux de products */
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProducts(state, action: PayloadAction<Product>) {
      state.data.push(action.payload);
    },
    readProducts(state, action: PayloadAction<Product[]>) {
      state.data = state.data.concat(action.payload);
    },
    clearProducts(state) { // Nuevo reducer para limpiar los productos
      state.data = [];
    },
    updateProducts(state, action) {},
    deleteProducts(state, action) {},
  },
});

export const { createProducts, readProducts, updateProducts, deleteProducts, clearProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
