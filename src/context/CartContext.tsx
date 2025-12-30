import { createContext } from "react";

interface CartContextData {
  total: number;
  count: number;
  addSupport: (value: number) => void;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);
