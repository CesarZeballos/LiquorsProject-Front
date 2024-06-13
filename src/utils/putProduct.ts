import axios from "axios";
import { IProductChangeStatus } from "@/components/productForm/types";

export const putProduct = async (productId: string, dataProduct: IProductChangeStatus, token: string) => {
  try {
      const response = await axios.put<IProductChangeStatus>(`https://liquors-project.onrender.com/products/${productId}`, 
        dataProduct,
        {headers: {Authorization: `bearer ${token}`}
      })
      console.log(response);
  } catch (error) {
      console.error("error al agregar el producto", error);
  }
}