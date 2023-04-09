import { Link } from 'react-router-dom'


export const Navbar = () => {
    return(
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/Home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">Smarty</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/Smarty" className="mr-5 hover:text-gray-900">Qué es Smarty</Link>
      <Link to="/" className="mr-5 hover:text-gray-900">Materias</Link>
      <Link to="/" className="mr-5 hover:text-gray-900">Registro</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Inicia Sesión
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
      </svg>
    </button>
  </div>
</header>
    )
};
