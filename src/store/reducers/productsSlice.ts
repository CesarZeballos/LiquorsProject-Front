import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from "@/interfaces/interfaz";

const initialState: ProductsState = {
  data: [],
  ginProducts: [],
  wineProducts: [],
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
    readGinProducts(state, action: PayloadAction<Product[]>) {
      state.ginProducts = action.payload;
    },
    clearGinProducts(state) {
      state.ginProducts = [];
    },
    readWineProducts(state, action: PayloadAction<Product[]>) {
      state.ginProducts = action.payload;
    },
    clearWineProducts(state) {
      state.ginProducts = [];
    },
    clearProducts(state) { // Nuevo reducer para limpiar los productos
      state.data = [];
    },
    updateProducts(state, action) {},
    deleteProducts(state, action) {},
  },
});

export const { createProducts, readProducts, readWineProducts, clearWineProducts, updateProducts,clearGinProducts, readGinProducts, deleteProducts, clearProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
