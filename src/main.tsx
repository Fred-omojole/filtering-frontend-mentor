import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Header from "./Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="min-h-[screen] overflow-hidden">
      <Header />

      <div className="max-w-4xl mx-auto p-5 ">
        <App />
      </div>
    </main>
  </React.StrictMode>
);
