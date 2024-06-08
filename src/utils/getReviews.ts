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
