import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Book from "./Book";
import Ui from "./Ui";
import Ayo from "./Ayo";

import Ux from "./Ux";
import Vall from "./Vall";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Book />
    <Ayo/>
    <Ui/> 
    <Ux/>
    <Vall/>
  </StrictMode>
);
