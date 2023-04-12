import {BrowserRouter, Routes, Route } from "react-router-dom";
//Vistas Estudiante//
import Home from "../Vistas/Homes/Home";
import Smarty from "../Vistas/Smarty/Smarty";
import Materias from "../Vistas/Materias/Materias";
import InicioSesion from "../Vistas/InicioSesion/InicioSesion";
import Registro from "../Vistas/Registro/Registro";
import ForgotPass from "../Vistas/forgot-password/ForgotPass";
import NotFound from "../Vistas/NotFound404/Notfound";

//Vistas Admin//

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Smarty" element={<Smarty />} />
        <Route path="/Materias" element={<Materias />} />
        <Route path="/InicioSesion" element={<InicioSesion />}/>
        <Route path="/Registro" element={<Registro />}/>
        <Route path="/ForgotPass" element={<ForgotPass />}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

