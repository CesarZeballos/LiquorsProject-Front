import axios from "axios";
import { AppDispatch } from "@/store/store";
import { clearProductsFiltered, readProductsFiltered} from "@/store/reducers/productsSlice";
import { Product } from "@/interfaces/interfaz";

export const fetchProductsFiltered = async (dispatch: AppDispatch, filters: any, router: any) => {
  try {
      const abv = filters.abvRange
      const category = filters.categoryButton
      const rate = filters.selectedRating
      console.log("valor de abv que envio a back", abv, "valor que envio al back de category",category);
      const res = await axios.get<Product[]>(`https://liquors-project.onrender.com/products/?category=${category}&abv=${abv}`);
      console.log("respuesta back", res);
      dispatch(clearProductsFiltered());
      dispatch(readProductsFiltered(res.data));
      router.push("/product/productFilteredBackEnd")
  } catch (err) {
      console.error(err);
  }
};