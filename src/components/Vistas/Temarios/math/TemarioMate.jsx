import { React } from "react";
import { Navbar } from "../../Navbar";
import Footer from "../../Footer";
import "./temariomate.css";
import { Link } from "react-router-dom";
import fracciones from "./fracciones.png";

const TemarioMate = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-400 bg-white body-font overflow-hidden">
        
        <div className="py-8 flex  flex-wrap md:flex-nowrap p-20">
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              ¿Qué es una fracción?
            </h2>
            <p className="leading-relaxed">
              Una fracción representa el número de partes que cogemos de una
              unidad que está dividida en partes iguales. <br></br> Se representa por dos
              números separados por una línea de fracción.
            </p>
            <br></br>
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              Términos de una fracción
            </h2>
            <p className="leading-relaxed">
              Los términos de una fracción son el numerador y el denominador. El
              numerador es el número de partes que tenemos y el denominador es
              el número de partes en que hemos dividido la unidad. Vamos a ver
              un ejemplo: Tenemos diferentes figuras y cada una de ellas la
              dividimos en diferentes partes iguales, que es el denominador. La
              parte coloreada es el numerador.
            </p>
            <img src={fracciones} alt="" className="w-1/3 h-1/4 p-6"/>
            <br></br>
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              ¿Cómo se leen las fracciones?
            </h2>
            <p className="leading-relaxed">
              El numerador se lee con los números cardenales. 1 – un, 2 – dos, 3
              – tres, …, 10 – diez, …, 24 – veinticuatro… El denominador se lee
              con los números partitivos. 2 – medios, 3 – tercios, 4 – cuartos,
              5 – quintos, 6 – sextos, 7 – séptimos, 8 – octavos, 9 – novenos,
              10 – décimos. A partir del 11, el número se lee terminado en
              -avos: 11 – onceavos, 12 – doceavos, …
            </p>
            <br></br>
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              Tipos de fracciones
            </h2>
            <p className="leading-relaxed">
              <b>Fracción propia:</b> Cuando el numerador es menor que el
              denominador.
              <br></br>
              <b>Fracción impropia:</b> Cuando el numerador es mayor que el
              denominador.
              <br></br>
              <b>Fracción unitaria:</b> Cuando el numerador es igual que el
              denominador.
            </p>
            
            <div className="py-8 flex  flex-wrap md:flex-nowrap">
        <Link to={"/QuizzFraciones"} className="text-mainblue">Relizar Test
            
          </Link>
        </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TemarioMate;
