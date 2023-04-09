import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Vistas/Homes/Home";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

