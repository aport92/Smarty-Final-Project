import { React } from "react";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "./materias2.css";
import Math from "../Materias/Mathematics.gif";
import Science from "../Materias/Biologist.gif";
import Language from "../Materias/Bibliophile.gif";

const Materias = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img src={Math} />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Asignatura</h2>
            <h1 className="title-font text-lg font-medium text-[#1b62bf] mb-3">Matemáticas</h1>
            <p className="leading-relaxed mb-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium, earum mollitia deleniti aliquam nulla magni impedit nam. Repudiandae tenetur laborum, facilis placeat doloremque nihil animi asperiores ab? Laborum, magni!</p>
            <div className="flex items-center flex-wrap ">
              <Link to={"/TemarioMate"} className="text-[#328bd9] inline-flex items-center md:mb-2 lg:mb-0"> Inicia tu ruta
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img src={Language} />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Asignatura</h2>
            <h1 className="title-font text-lg font-medium text-[#1b62bf] mb-3">Lenguaje y Literatura</h1>
            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quibusdam molestiae iure, voluptatum dolor quas quasi inventore consequatur doloribus excepturi consectetur eveniet necessitatibus explicabo assumenda quod? </p>
            <div className="flex items-center flex-wrap">
              <Link to={"/Quizz2"}className="text-[#328bd9] inline-flex items-center md:mb-2 lg:mb-0">Inicia tu ruta
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img src={Science} />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Asignatura</h2>
            <h1 className="title-font text-lg font-medium text-[#1b62bf] mb-3">Ciencias Naturales </h1>
            <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium, earum mollitia deleniti aliquam nulla magni impedit nam. Repudiandae tenetur laborum, facilis placeat doloremque nihil animi asperiores ab? Laborum, magni!</p>
            <div className="flex items-center flex-wrap ">
              <Link to={"/Quizz3"} className="text-[#328bd9] inline-flex items-center md:mb-2 lg:mb-0"> Inicia tu ruta
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





           
       
         
      <Footer />
    </>
  );
};

export default Materias;
