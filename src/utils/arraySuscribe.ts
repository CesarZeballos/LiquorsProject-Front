import { ISuscribe } from "@/interfaces/interfaz";
import axios from "axios";

export const arraySuscribe: ISuscribe[] = [
  {
    title: "Plan Premium",
    description1: "Acceso ilimitado a los artículos.",
    description2: "Acceso a newsletters mensuales.",
    description3: `Podrás obtenes la "Caja de mes", con el artículo favorito del mes`,
    description4: "Descuentos en eventos.",

    price: 4.99,
    onClick: () => {
      alert("Evento Premium");
    },
  },

  {
    title: "Plan Liquors para Empresas",
    description1: "Puedes hacer desaparecer el WiFi de tus vecinos",
    description2: "Acceso a los spoilers de todas las series",
    description3: "Puedes teletransportarte a la fila de adelante",
    description4: "Descripción mágica 2 que no se me ocurre",
    price: 14.99,
    onClick: () => {
      alert("evento Empresa");
    },
  },
];
