"use client";
import { ISuscribe } from "@/interfaces/interfaz";
import React from "react";

const SuscribeCard = ({ product }: { product: ISuscribe }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden my-4 bg-opacity-85">
      <div className="p-8">
        <h2 className="block mt-1 text-2xl leading-tight font-plus-jakarta-sans text-gray-900">
          {product.title}
        </h2>
        <p className="mt-2 text-gray-600 font-semibold">
          {product.description1}
        </p>
        <ul className="mt-4 text-gray-600 list-disc list-inside">
          <li>{product.description2}</li>
          <li>{product.description3}</li>
          <li>{product.description4}</li>
        </ul>
        <div className="mt-6">
          <span className="block text-3xl font-bold text-gray-900">
            ${product.price}/mes
          </span>
          <div className="align-center">
            <button
              className="mt-4 px-6 py-2 bg-wine text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75 transition duration-200"
              onClick={product.onClick}
            >
              Suscribirse Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuscribeCard;
