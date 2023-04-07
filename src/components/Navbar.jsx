
import {React} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
      <div>
          <ul>
            <li>
                <NavLink className={({isActive})=> (isActive ? 'active' : 'activeBlue') } to="/Home" >Inicio</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> (isActive ? 'active' : 'activeBlue') } to="/Smarty">Qué Es Smarty</NavLink>
            </li>

            <li>
                <NavLink className={({isActive})=> (isActive ? 'active' : 'activeBlue') } to="/Matrerias">Materias</NavLink>
            </li>
          </ul>
      </div>
  );
}

export default Navbar;