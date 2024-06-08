"use client";
import { IReview } from "@/interfaces/interfaz";
import { AppDispatch } from "@/store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearReviews, readReviews } from "@/store/reducers/reviewsSlice";
/* estilos */
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import axios from "axios";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#E94637",
  },
});

export const ReviewForm = () => {
  const [formData, setFormData] = useState({
    comment: "",
    rate: 0,
  });

  const dispatch = useDispatch();
  const clearInput = () => {
    setFormData({ comment: "", rate: 0 });
  };
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (
    event: React.ChangeEvent<{}>,
    value: number | null
  ) => {
    setFormData({ ...formData, rate: value ?? 0 });
  };

  const postReviews = async (
    dispatch: AppDispatch,
    formData: { comment: string; rate: number }
  ) => {
    const detailProduct = localStorage.getItem("detailProduct");
    const detailUser = localStorage.getItem("userDataLogin");
    if (detailProduct && detailUser) {
      const idProduct = JSON.parse(detailProduct);
      const idUser = JSON.parse(detailUser);
      const idP = idProduct.id;
      const idU = idUser.id;
      try {
        const res = await axios.post<IReview[] | any>(
          `https://liquors-project.onrender.com/reviews/?userId=${idU}&productId=${idP}`,
          formData
        );
        dispatch(clearReviews());
        dispatch(readReviews(res.data));
        clearInput();
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postReviews(dispatch, formData);
  };

  return (
    <div>
      <h1 className="text-black">
        Queremos conocer tu opinión de este producto!
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handlerSubmit}>
        <input
          type="text"
          value={formData.comment}
          name="comment"
          placeholder="Publica aquí tu Review"
          onChange={handlerChange}
        />

        <StyledRating
          name="rate"
          value={formData.rate}
          defaultValue={0}
          getLabelText={(value: number) =>
            `${value} Heart${value !== 1 ? "s" : ""}`
          }
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          onChange={handleRatingChange}
        />

        <button type="submit" className="buttonPrimary w-fit">
          Postear opinión
        </button>
      </form>
    </div>
  );
};
