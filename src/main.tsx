import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App-two.tsx";
import "./index.css";
import "./store.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
