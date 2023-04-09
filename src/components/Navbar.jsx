
import {React} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  return (
      <div>
                <NavLink className={({isActive})=> (isActive ? 'active' : 'active' ) } to="/Home" >Inicio</NavLink>

                <NavLink className={({isActive})=> (isActive ? 'active' : 'active' ) } to="/Smarty">Qué Es Smarty</NavLink>

                <NavLink className={({isActive})=> (isActive ? 'active': 'active' ) } to="/Matrerias">Materias</NavLink>
      </div>
  );
}

export default Navbar;