import axios from "axios";
import { AppDispatch } from "@/store/store";
import { readGinProducts } from "@/store/reducers/productsSlice";
import { clearGinProducts } from "@/store/reducers/productsSlice";
import { Product } from "@/interfaces/interfaz";

export const fetchProductsFiltered = async (dispatch: AppDispatch, filters: any) => {
  try {
        //ver como pasar valores de filters por query
      const res = await axios.get<Product[]>(`https://liquors-project.onrender.com/products/?category=Gin&rate=3.5&type=wine`);
      dispatch(clearGinProducts());
      dispatch(readGinProducts(res.data));
  } catch (err) {
      console.error(err);
  }
};