import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/App.css";
import "./style/Buttons.css";
import "./style/Pagination.css";
import "./style/Popover.css";
import "./style/SearchBar.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
