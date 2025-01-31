import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import { StarshipProvider } from "./shared/context/StarshipContext.tsx";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StarshipProvider>
      <App />
    </StarshipProvider>
  </React.StrictMode>
);
