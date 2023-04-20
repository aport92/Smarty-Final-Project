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
import TemarioMate from "../Vistas/Temarios/math/TemarioMate";
import TemarioLenguaje from "../Vistas/Temarios/Lenguaje/TemarioLenguaje";
import TemarioCiencias from "../Vistas/Temarios/Ciencias/TemarioCiencias";
import QuizzFraciones from "../Vistas/Quizzes/Quizzesmate/QuizzFraciones";
import Quizzciencias from "../Vistas/Quizzes/Quizzescienciasnatu/quizzciencias";
import QuizzLiteratura from "../Vistas/Quizzes/QuizzesLenguaje/QuizzLiteratura";


//Vista Admin//
import LoginAdmin from "../Vistas/Admin/LoginAdmin/LoginAdmin";
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
        <Route path="/TemarioMate" element={<TemarioMate />} />
        <Route path="/TemarioLenguaje" element={<TemarioLenguaje />} />
        <Route path="/TemarioCiencias" element={<TemarioCiencias />} />
        <Route path="/QuizzFraciones" element={<QuizzFraciones />} />
        <Route path="/Quizzciencias" element={<Quizzciencias/>}/>
        <Route path="/QuizzLiteratura" element={<QuizzLiteratura/>}/>       

        {/*Admin*/}
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
