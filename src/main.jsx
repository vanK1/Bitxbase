import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Book from "./Book";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Book />
  </StrictMode>
);
