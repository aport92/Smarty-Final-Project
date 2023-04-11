import {React} from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import ForgotPassword from '../forgot-password/Forgot-pass.gif'

const ForgotPass = () => {
  return (
    <>
    <Navbar/>
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
    <div className="flex flex-col overflow-y-auto md:flex-row">
      <div className="h-32 md:h-auto md:w-1/2">
      <img src={ForgotPassword} alt="Forgot Password" className="object-cover h-full w-full"/></div>
      </div>
      <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div className="w-full">
          <h1 className="block mb-2 text-xl">Olvidé mi contraseña</h1>
          <label className="block mb-2">
            <span className="text-gray-700 dark:text-gray-400">Correo electrónico: </span>
            <input className="block w-full mt-1 text-sm font-font3 dark:border-gray-600 dark:bg-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-blue dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              placeholder="0000000@mail.edu.sv"/></label>

          <Link className="block w-full px-4 py-2 mt-4 text-sm font-font2 leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg hover:bg-blue-800 focus:outline-none focus:shadow-outline-darkblue"
            to="">Recuperar Contraseña</Link>
        </div>
      </div>
    </div>
  </div>
    <Footer/>
    </>
  );
}

export default ForgotPass;