import { React } from "react";
import { Navbar } from "../../Navbar";
import Footer from "../../Footer";
import "./temariolenguaje.css";

import { Link } from "react-router-dom";

const TemarioLenguaje = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-400 bg-white body-font overflow-hidden">
        <div className="h-auto  p-4  rounded-lg overflow-hidden">
          <img src={"fracciones"} alt="" />
        </div>
        <div className="py-8 flex  flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-white">
            ¿Qué es un texto narrativo?
            </span>
            <span className="mt-1 text-gray-500 text-sm"></span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              ¿Qué es una fracción?
            </h2>
            <p className="leading-relaxed">
            Un texto narrativo es un relato en el que se cuenta una historia real o ficticia que ocurre en un lugar y tiempo concretos.

En la vida cotidiana, la narración forma parte esencial de nuestra forma de comunicarnos, dado que se trata de una forma de contar una sucesión de hechos en la que un sujeto o grupo de personajes realiza una serie de acciones que tienen un desenlace.
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
          </div>
          <Link
            to={"/QuizzFraciones"}
            className="text-blue-400 inline-flex items-center mt-4"
          >
            Leer Más
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TemarioLenguaje;
