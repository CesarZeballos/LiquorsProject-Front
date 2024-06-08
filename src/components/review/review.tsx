import React from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "@/utils/getReviews";
import { removeReview } from "@/store/reducers/reviewsSlice"; // Acción de Redux para eliminar la review del estado
import { IReview } from "@/interfaces/interfaz";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete"; // Importa un ícono para el botón de eliminar

export const Review = ({ review }: { review: IReview }) => {
  const { id, rate, comment, userId } = review; /* datos de la review */
  const { name } = userId; /* datos del usuario que hizo la review */
  const dispatch = useDispatch();

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que quieres eliminar esta review?")) {
      try {
        await deleteReview(id); // Llama a la función para eliminar la review del servidor
        dispatch(removeReview(id)); // Actualiza el estado global para eliminar la review
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
