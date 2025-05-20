import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Book from "./Book";
import Ui from "./Ui";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Book />
    <Ui/> 
  </StrictMode>
);
