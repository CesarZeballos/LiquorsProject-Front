import axios from "axios";
import { AppDispatch } from "@/store/store";
import { readProducts } from "@/store/reducers/productsSlice";
import { clearProducts } from "@/store/reducers/productsSlice";
import { Product } from "@/interfaces/interfaz";

export const fetchProductsGin = async (dispatch: AppDispatch) => {
  try {
      const res = await axios.get<Product[]>("https://liquors-project.onrender.com/products/?category=Gin");
      //deberia hacer un estado global nuevo solo para products/gins.
      dispatch(clearProducts());
      dispatch(readProducts(res.data))
  } catch (err) {
      console.error(err);
  }
};