import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Book from "./Book";
import Ui from "./Ui";
import Vall from "./Vall";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Book />
    <Ui/> 
    <Vall/>
  </StrictMode>
);
