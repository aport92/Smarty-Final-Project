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
              <b>Cuento:</b> narración breve, con pocos personajes y desenlace
              rápido.
              <br></br>
              <b>Leyenda:</b> narraciones que mezclan hechos reales y
              sobrenaturales.
              <br></br>
              <b>Mito:</b> historia de corte fantástico que explica el origen de
              un lugar o un suceso.
              <br></br>
              <b>Novela:</b> narración real o ficticia, mucho más extensa y
              compleja que un cuento.
              <br></br>
              <b>Poesía épica:</b> narración de hechos legendarios reales o
              ficticios.
              <br></br>
              <b>Crónica:</b> texto que sigue un orden temporal de los hechos
              para contar una historia.
              <br></br>
              <b>Noticia:</b> género periodístico que narra brevemente un suceso
              actual.
              <br></br>
              <b>Reportaje:</b> investigación periodística extensa sobre una
              persona o hecho.
              <br></br>
              <b>Biografía:</b> narración sobre la vida de una persona y sus
              momentos más relevantes.
            </p>
            <img src={literatura} alt="" className="w-1/3 h-1/4 p-6" />
            <br></br>
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              ¿Cuáles son las características del texto narrativo?
            </h2>
            <p className="leading-relaxed">
              Por ejemplo, los cuentos que comienzan con “Había una vez un
              castillo encantado en el medio del bosque…”, presentan un tiempo y
              un espacio no definido donde se desarrolla la acción. 
              <br></br>
              Si el texto
              es una noticia, nos informará sobre el lugar y el momento exactos
              donde tiene lugar el suceso. Narra una acción Un texto narrativo
              describe las acciones que realizan los personajes que, a su vez,
              tienen un fin dentro de la historia. Por ejemplo, en el caso de
              los cuentos puede ser conquistar un territorio, rescatar a un
              personaje, buscar un tesoro, etc.
               En el caso de la poesía épica,
              puede ser la lucha en el campo de batalla o las aventuras de
              regreso a la patria. El autor del texto puede ser el narrador de
              la historia Quien escribe el texto narrativo puede ser, a su vez,
              quien narre los acontecimientos desde la primera, segunda o
              tercera persona. Cuando una persona envía un mensaje de texto
              contando algo que le pasó durante el día, se convierte en autor y
              narrador al mismo tiempo. Tiene un objetivo Un texto narrativo
              puede tener un fin informativo (como las noticias periodísticas),
              de enseñanza (las moralejas de los cuentos) o de entretenimiento
              (novelas, chistes, etc.).
            </p>
            <br></br>
            <h2 className="text-2xl font-medium text-mainblue title-font mb-2">
              Tipos de fracciones
            </h2>
            <p className="leading-relaxed"></p>

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
