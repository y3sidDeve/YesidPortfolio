import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


// importaciones de NextUI y TailwindCSS
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="green-dark text-foreground bg-background">
          <App/>
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
