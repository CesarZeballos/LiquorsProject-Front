import axios from "axios";
import { AppDispatch } from "@/store/store";
import { readReviews } from "@/store/reducers/reviewsSlice";
import { clearReviews } from "@/store/reducers/reviewsSlice";
import { IReview } from "@/interfaces/interfaz";

export const fetchReviews = async (dispatch: AppDispatch) => {
  const detailProduct = localStorage.getItem("detailProduct");
  const idProduct = JSON.parse(detailProduct!);
  const idP = idProduct.id;
  try {
    const res = await axios.get<IReview[] | any>(
      `https://liquors-project.onrender.com/reviews/product/${idP}`
    );
    dispatch(clearReviews());
    dispatch(readReviews(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const deleteReview = async (reviewId: string) => {
  const detailProduct = localStorage.getItem("detailProduct");
  const userDataLogin = localStorage.getItem("userDataLogin");
  if (detailProduct && userDataLogin) {
    const idProduct = JSON.parse(detailProduct);
    const idUser = JSON.parse(userDataLogin);
    const idP = idProduct.id;
    const idU = idUser.id;
    const url = `https://liquors-project.onrender.com/reviews/${reviewId}?userId=${idU}&productId=${idP}`;

    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      throw new Error("Error eliminando la review");
    }
  }
};
