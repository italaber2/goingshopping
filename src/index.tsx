import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./components/general/AppRouter";
import "./style/App.css";
import "./style/Buttons.css";
import "./style/Pagination.css";
import "./style/Layer.css";
import "./style/ProductDetailsLayer.css";
import "./style/SearchBar.css";
import "./style/ShoppingCart.css";
import "./style/ShoppingCartPage.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
