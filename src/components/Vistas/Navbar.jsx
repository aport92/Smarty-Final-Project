import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return(
    <div className="wrapper">
      <nav>
         <div className="flex-shrink-0 flex items-center">
          <img className="hidden lg:block h-8 w-auto" src={"src/images/smarty-favicon.png"} alt="Smarty logo" />
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