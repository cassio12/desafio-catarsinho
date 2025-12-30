import { CartProvider } from "./context/CartProvider.tsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bulma/css/bulma.min.css";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <App />
  </CartProvider>
);
