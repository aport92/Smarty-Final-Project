import {React} from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import SmartyLearning from './SmartyLearning.gif';
import { Link } from 'react-router-dom';


const Smarty = () => {
  return (
  <div>
    <Navbar/>
<section className="text-gray-400 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img src={SmartyLearning} alt="" className="object-cover object-center"/>
            </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="title-font sm:text-md text-md mb-4 font-sm text-gray-600"><strong>Smarty</strong> es una aplicación web que te ayudará a fortalecer tus conocimientos de una manera fácil y divertida. Con Smarty, podrás responder cuestionarios de las diferentes materias de ciencias de tu grado y recibir un puntaje por cada uno. Además, podrás personalizar tu perfil con tu foto y ganar insignias según el avance que tengas en los diferentes niveles de cuestionarios y la frecuencia con la que uses la aplicación.
            <br/> <br/>
            La ventaja de Smarty es que podrás utilizarla desde cualquier dispositivo conectado a internet y en cualquier momento que tengas libre. También podrás ver tus avances y métricas de uso, como el tiempo que pasaste en la aplicación y tu nivel de satisfacción con la misma.
            </p>
              <p className="mb-8 leading-relaxed text-gray-600">¡No pierdas la oportunidad de convertirte en un experto en ciencias con Smarty!</p>

                <div className="flex justify-center">
                  <Link to="/" className="rounded-md bg-blue-600 px-6 py-2.5 text-xl font-font2 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Vamos allá</Link>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    </svg>
                </div>
        </div>
    </div>
</section>
    <Footer />
  </div>
  );
}

export default Smarty;