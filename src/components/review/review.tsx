"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "@/utils/getReviews";

import { IReview } from "@/interfaces/interfaz";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import { RootState } from "@/store/store";
import { deleteReview } from "@/utils/deleteReviews";

export const Review = ({ review }: { review: IReview }) => {
  const dataReviews: IReview[] = useSelector(
    (state: RootState) => state.reviews.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchReviews(dispatch);
    console.log("dataReviews", dataReviews);
  }, [dispatch]);
  const { id, rate, comment, userId } = review; /* datos de la review */
  const { name } = userId; /* datos del usuario que hizo la review */

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar esta review?")) {
      try {
        await deleteReview(id, dispatch);
        alert("Review eliminada con éxito.");
      } catch (error) {
        console.error("Error eliminando la review:", error);
        alert("Hubo un error eliminando la review.");
      }
    }
  };

  return (
    <div
      key={id}
      className="flex flex-col gap-2 px-4 py-2 bg-grey1 rounded mx-10"
    >
      <div className="flex flex-row items-center gap-4">
        <span className="text-black">{rate}</span>
        <div className="flex flex-row justify-center mx-2">
          <StarIcon className="text-gray-300" />
        </div>
        <button
          onClick={() => handleDelete(id)}
          className="ml-auto text-red-600"
        >
          <DeleteIcon />
        </button>
      </div>
      <p className="body1">"{comment}"</p>
      <h3 className="subtitle2">{name}</h3>
    </div>
  );
};
