"use client";
import { ISuscribe } from "@/interfaces/interfaz";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SuscribeCard = ({ product }: { product: ISuscribe }) => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState(0);
  /*   const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null); */

  useEffect(() => {
    const userDataLogin = localStorage.getItem("userDataLogin");
    if (userDataLogin) {
      const userData = JSON.parse(userDataLogin);
      setRole(userData.role);
      setUserId(userData.id);
    }
  }, []);

  const handlePayment = async () => {
    try {
      if (role === product.role) {
        console.log(role);
        alert(`Ya eres un usuario ${product.type}`);
      }
      if (role === 4 && product.role === 3) {
        const response = await axios.post(
          `https://liquors-project.onrender.com/subscription/${userId}`,
          {
            type: product.type,
            amount: 200,
            amountDif: 100,
          }
        );
        console.log(response);
        router.push(response.data.init_point);
      } else {
        const response = await axios.post(
          `https://liquors-project.onrender.com/subscription/${userId}`,
          {
            type: product.type,
            amount: product.price,
          }
        );
        console.log(response);
        router.push(response.data.init_point);
      }
    } catch (error) {
      console.error("Error during subscription:", error);
    }
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-2xl overflow-hidden my-4 bg-opacity-85">
      <div className="p-8">
        <h2 className="block mt-1 text-center text-2xl leading-tight font-plus-jakarta-sans text-gray-900">
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
              className="mt-4 px-6 py-2 bg-wine text-white font-semibold rounded-lg shadow-md  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75 transition duration-200"
              onClick={handlePayment}
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuscribeCard;
