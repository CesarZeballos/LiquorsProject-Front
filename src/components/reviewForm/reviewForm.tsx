"use client";
import { useState } from "react";

export const ReviewForm = () => {
  const [formData, setFormData] = useState({
    comment: "",
    rate: 0,
  });
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlerSubmit = () => {
    alert("publicacion de la review");
    console.log(formData);
  };

  return (
    <div>
      <h1 className="text-black">
        Queremos conocer tu opinion de este producto
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handlerSubmit}>
        <input
          type="text"
          value={formData.comment}
          name="comment"
          placeholder="¿Cuál es tu opinión sobre este producto?"
          onChange={handlerChange}
        />
        <button type="submit" className="buttonPrimary w-fit">
          postear opinion
        </button>
      </form>
    </div>
  );
};
