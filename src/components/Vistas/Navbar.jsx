import { Link } from 'react-router-dom'


export const Navbar = () => {
    return(
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/Home" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl">Smarty</span>
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/Smarty" class="mr-5 hover:text-gray-900">Qué es Smarty</Link>
      <Link to="/" class="mr-5 hover:text-gray-900">Materias</Link>
      <Link to="/" class="mr-5 hover:text-gray-900">Registro</Link>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Inicia Sesión
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
      </svg>
    </button>
  </div>
</header>
    )
};
