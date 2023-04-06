import { Link } from "react-router-dom";


export const Navbar = () => {
    return(
        <div class="px-6 pt-6 lg:px-8">
        <nav class="flex items-center justify-between" aria-label="Global">
          <div class="flex lg:flex-1">
            {/*Icono de home-*/}
            <Link to="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Smarty App</span>
              <img class="h-12" src="img/smarty-home.png" alt=""/>
            </Link>
          </div>
  
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span class="sr-only">menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <Link to="/" class="text-sm font-semibold font-font1 leading-6  text-blue1">Qué es Smarty</Link>
  
            <Link to="#" class="text-sm font-semibold font-font1 leading-6 text-blue1"> Materias </Link>
  
            <Link to="#" class="text-sm font-semibold font-font1 leading-6 text-blue1">Registrate</Link>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="#" class="text-sm font-semibold font-font1 leading-6 text-blue1">Inicia Sesión<span
                aria-hidden="true"></span></Link>
          </div>
        </nav>
        </div>
    )
}