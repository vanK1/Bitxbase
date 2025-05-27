import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Homefolder/Home";
import Event from "./Eventfolder/Event";
import CreateEvent from "./CreateEventfolder/CreateEvent";
import About from "./AboutFolder/About";
// import FullEvent from "./Eventfolder/FullEvent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/event" element={<Event/>}/>
  <Route path="/create" element={<CreateEvent/>}/>
  <Route path="/about" element={<About/>}/>
 </Routes>
 </BrowserRouter>
  </StrictMode>
);
