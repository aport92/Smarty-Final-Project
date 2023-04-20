import { React } from "react";
import { Navbar } from "../../Navbar";
import Footer from "../../Footer";
import "./temariociencias.css";
import { Link } from "react-router-dom";
import planta from "./planta.webp";

const TemarioCiencias = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-400 bg-white body-font overflow-hidden">
        <div className="py-8 flex  flex-wrap md:flex-nowrap p-20">
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              Partes de una planta y sus funciones
            </h2>
            <p className="leading-relaxed">
              Todos sabemos identificar de un vistazo las distintas partes de la
              mayoría de las plantas, como el tronco en un árbol o la raíz de
              cualquiera de ellas. Sin embargo, ¿conoces bien cuáles son todas
              las partes de las plantas y qué funciones cumplen?
              <img src={planta} alt="" className="w-1/3 h-1/4 p-8 m-8" />
              <br></br>
            </p>
            <br></br>
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2"></h2>
            <p className="leading-relaxed">
              De forma resumida, las partes importantes de las plantas son estas
              cinco: Tallo Raíces Hojas Flor Fruto A continuación, explicaremos
              cada una de estas partes de las plantas y sus funciones.
            </p>

            <br></br>
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              Tallo
            </h2>
            <p className="leading-relaxed">
              El tallo es la parte aérea de la planta que entre sus funciones
              tiene la de dar soporte y estructura a la misma, sosteniendo sus
              otros órganos vegetales aéreos, como las hojas y las flores. Otra
              de sus principales características es que presenta geotropismo
              negativo, que quiere decir que crece en sentido opuesto a la
              gravedad. Aunque hemos comentado que es la parte aérea de la
              planta, lo cierto es que existen varios tipos de tallos y sus
              funciones: Los tallos aéreos pueden diferenciarse en erguidos,
              rastreros, trepadores y volubles, aunque hay tallos especiales,
              como los que presentan espinas, los estolones o los zarcillos.
            </p>
            <br></br>
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              Tipos de tallos
            </h2>
            <p className="leading-relaxed">
              Los tallos pueden clasificarse de distintas formas, pero la más
              común de ellas es hacerlo según el medio en que se encuentran, que
              diferencia tallos subterráneos y aéreos.
              <b>Los tallos subterráneos</b> se subdividen a su vez en
              tubérculos, rizomas y bulbos.
              <br></br>
              <b>Los tallos aéreos </b> pueden diferenciarse en erguidos,
              rastreros, trepadores y volubles, aunque hay tallos especiales,
              como los que presentan espinas, los estolones o los zarcillos.
              <br> </br>
            </p>
            <br></br>
            
            <p>

            </p>

            <div className="py-8 flex  flex-wrap md:flex-nowrap">
              <Link to={"/quizzciencias"} className="text-mainblue">
                Relizar Test
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TemarioCiencias;
