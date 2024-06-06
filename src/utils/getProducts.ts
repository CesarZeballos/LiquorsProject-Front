import axios from "axios";
import { AppDispatch } from "@/store/store";
import { readProducts } from "@/store/reducers/productsSlice";
import { Product } from "@/interfaces/interfaz";

export const fetchProducts = async (dispatch: AppDispatch) => {
  try {
      const res = await axios.get<Product[]>("https://liquors-project.onrender.com/products");
      dispatch(readProducts(res.data))
  } catch (err) {
      console.error(err);
  }
};