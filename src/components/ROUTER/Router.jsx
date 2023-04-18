//Vista General//
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Vistas/Homes/Home";
import Smarty from "../Vistas/Smarty/Smarty";
import InicioSesion from "../Vistas/InicioSesion/InicioSesion";
import Registro from "../Vistas/Registro/Registro";
import ForgotPass from "../Vistas/forgot-password/ForgotPass";
import NotFound from "../Vistas/NotFound404/Notfound";

//Vista Estudiante//
import Materias from "../Vistas/Materias/Materias";

//Vista Admin//
import Dashboard from "../Vistas/Admin/dashboard/Dashboard";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        {/*general*/}
        <Route path="/" element={<Home />} />
        <Route path="/Smarty" element={<Smarty />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="*" element={<NotFound />} />

        {/*Estudiante*/}
        <Route path="/Materias" element={<Materias />} />

        {/*Admin*/}
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
