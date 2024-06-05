import { IPremium, ISuscribe } from "@/interfaces/interfaz";

export const suscribePremium: IPremium = {
  type: "premium",
  status: "active",
  amount: 100,
};
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
    description1: "Te contamos el findal de One Piece antes de que te mueras",
    description2: "Puedes publicar productos",
    description3: "Puedes hacer otras cosas we",
    description4: "Descripción mágica que no se me ocurre",
    price: 14.99,
    onClick: () => {
      alert("evento Empresa");
    },
  },
];
