import { IReview } from "@/interfaces/interfaz";

import StarIcon from "@mui/icons-material/Star";

export const Review = ({ review }: { review: IReview }) => {
  const { id, rate, comment, userId } = review; /* datos de la review */
  const { name } = userId; /* datos del usuario que hizo la review */
  console.log("esto es el review", review);

  return (
    <div
      key={id}
      className="flex flex-col gap-2 px-4 py-2 bg-grey1 rounded mx-10"
    >
      <div className="flex flex-row items-center gap-4">
        <span className="text-black">{rate}</span>
        <div className="flex flex-row justify-center mx-2">
          <StarIcon className="text-gray-300" />
          <StarIcon className="text-gray-300" />
          <StarIcon className="text-gray-300" />
          <StarIcon className="text-gray-300" />
          <StarIcon className="text-gray-300" />
        </div>
      </div>
      <p className="body1">"{comment}"</p>
      <h3 className="subtitle2">{name}</h3>
    </div>
  );
};
