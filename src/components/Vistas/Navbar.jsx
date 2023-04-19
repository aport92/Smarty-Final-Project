import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../images/smarty-home.png";
import menu from "../../images/menu-burger-horizontal.svg";

export const Navbar = () => {
  return (
    <div className="wrapper">
      <nav>
        <div className="logo">
          <img
            to="/Home"
            className="lg:block h-8 w-auto"
            src={logo}
            alt="Smarty logo"
          />
        </div>
        <input type="checkbox" name="" id="toggle"></input>
        <label for="toggle">
          <img src={menu} alt="" width="25px" />
        </label>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/Smarty">Qué es Smarty</Link>
            </li>
            <li>
              <Link to="/Materias">Materias</Link>
            </li>
            <li>
              <Link to="/InicioSesion">Inicia Sesión</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
