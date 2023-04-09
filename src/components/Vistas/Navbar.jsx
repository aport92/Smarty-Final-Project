import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from "../../images/smarty-home.png";

export const Navbar = () => {
  return(
    <div className="wrapper">
      <nav>
        <div className='logo'>
        <img className=" lg:block h-8 w-auto" src={logo} alt="Smarty logo" />
        </div>
              <input type="checkbox" name="" id="toggle"></input>
                <label for="toggle"><i className='material-icons'>Menu</i></label>
                  <div className='menu'>
                    <ul>
                      <li><Link to="/Home">Inicio</Link></li>
                      <li><Link to="/Smarty">Qué es Smarty</Link></li>
                      <li><Link to="/Materias">Materias</Link></li>
                      <li><Link to="/InicioSesion">Inicia Sesión</Link></li>
                    </ul>
            </div>
      </nav>
    </div>
)
};