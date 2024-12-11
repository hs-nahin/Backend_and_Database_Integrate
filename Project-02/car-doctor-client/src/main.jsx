import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
