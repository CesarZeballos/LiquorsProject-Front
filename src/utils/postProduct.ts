import axios from "axios";
import { AppDispatch } from "@/store/store";
import { IProductForm } from "@/components/productForm/types";

export const postProduct = async (userId: string, dataProduct: IProductForm) => {
  try {
      const response = await axios.post<IProductForm>("https://liquors-project.onrender.com/products", );
      console.log("producto agregado correctamente", response.data)
  } catch (err) {
      console.error("error al agregar el producto", err);
      throw err;
  }
};
