import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  function addSupport(value: number) {
    setTotal((t) => t + value);
    setCount((c) => c + 1);
  }

  return (
    <CartContext.Provider value={{ total, count, addSupport }}>
      {children}
    </CartContext.Provider>
  );
}
