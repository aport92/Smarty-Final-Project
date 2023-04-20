import { React } from "react";
import { Navbar } from "../../Navbar";
import Footer from "../../Footer";
import "./temariolenguaje.css";
import { Link } from "react-router-dom";
import literatura from "./literatura.jpg";

const TemarioLenguaje = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-400 bg-white body-font overflow-hidden">
        <div className="py-8 flex  flex-wrap md:flex-nowrap p-20">
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              ¿Qué es un texto narrativo?
            </h2>
            <p className="leading-relaxed">
              Un texto narrativo es un relato en el que se cuenta una historia
              real o ficticia que ocurre en un lugar y tiempo concretos.
              <br></br>
              En la vida cotidiana, la narración forma parte esencial de nuestra
              forma de comunicarnos, dado que se trata de una forma de contar
              una sucesión de hechos en la que un sujeto o grupo de personajes
              realiza una serie de acciones que tienen un desenlace.
            </p>
            <br></br>
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              ¿Cuáles son los tipos de texto narrativo?
            </h2>
            <p className="leading-relaxed">
              <b>Cuento:</b> narración breve, con pocos personajes y desenlace rápido.
              <br></br>
              <b>Leyenda:</b> narraciones que mezclan hechos reales y sobrenaturales.
              <br></br>
              <b>Mito:</b> historia de corte fantástico que explica el origen de un lugar o un suceso.
              <br></br>
              <b>Novela:</b> narración real o ficticia, mucho más extensa y compleja que un cuento.
              <br></br>
              <b>Poesía épica:</b> narración de hechos legendarios reales o ficticios.
              <br></br>
              <b>Crónica:</b> texto que sigue un orden temporal de los hechos para contar una historia.
              <br></br>
              <b>Noticia:</b> género periodístico que narra brevemente un suceso actual.
              <br></br>
              <b>Reportaje:</b> investigación periodística extensa sobre una persona o hecho.
              <br></br>
              <b>Biografía:</b> narración sobre la vida de una persona y sus momentos más relevantes.
              
             
            </p>
            <img src={literatura} alt="" className="w-1/3 h-1/4 p-6" />
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
              <Link to={"/QuizzLiteratura"} className="text-mainblue">
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

export default TemarioLenguaje;
