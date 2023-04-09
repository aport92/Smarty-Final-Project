import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Vistas/Homes/Home";
import Smarty from "../Vistas/Smarty/Smarty";
import NotFound from "../Vistas/NotFound404/Notfound";
import Materia from "../Vistas/Materias/Materias";
import InicioSesion from "../Vistas/InicioSesion/InicioSesion";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Smarty" element={<Smarty />} />
        <Route path="/Materias" element={<Materia />} />
        <Route path="/InicioSesion" element={<InicioSesion />}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

