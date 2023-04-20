import React from "react";
import { useState } from "react";
const Quizzciencias = () =>{
  const [questions, setQuestions] = useState([
    {
        numb: 1,
        question: "¿Cuál es el órgano de la planta que tiene como función la reproducción?",
        answer: "Flor",
       options: [
          "Fruto.",
          "Tallo",
          "Flor",
          "Raíz"
        ]
      },
        {
        numb: 2,
        question: "¿Cuál de las siguientes funciones son realizadas por el sentido del tacto?",
        answer: "Distinguir diferentes temperaturas y texturas",
        options: [
          "Obtención de sensaciones a través del paladar",
          "Captación de formas y colores de los objetos",
          "Distinguir diferentes temperaturas y texturas",
          "Captación de los sonidos del ambiente"
        ]
      },
        {
        numb: 3,
        question: " ¿Qué hace la abeja para ayudar a que la flor se fecunde?",
        answer: "Polinizar las flores",
        options: [
          "Polinizar las flores",
          "Alimentarse del néctar",
          "Producir la miel.",
          "Transportar el néctar"
        ]
      },
        {
        numb: 4,
        question: "Observa la imagen que presenta el ciclo del agua ¿Cuál es la función del Sol en este ciclo?",
        answer: "Proveer la energía para que el agua cambie de estado y el ciclo se mantenga", 
        options: [
          " Hacer más alta la temperatura para impulsar la escorrentía de los ríos",
          "Permitir que las plantas elaboren su alimento a través de la fotosíntesis",
          "Generar vientos que transporten las nubes que llevan agua a la tierra",
          "Proveer la energía para que el agua cambie de estado y el ciclo se mantenga"
        ]
      },
        {
        numb: 5,
        question: "Observa y analiza el siguiente circuito en serie.¿Qué transformación de energía ocurre en el timbre?",
        answer: "Sonora a eólica",
        options: [
          "Sonora a eólica",
          "Eléctrica a sonora",
          "Lumínica a sonora",
          "Magnética a sonora"
        ]
      },
  ]);

  return (
    <div>
      <div className="start_btn">
        <button>Iniciar Quiz</button>
      </div>

      <div className="info_box">
        <div className="info-title">
          <span> Indicaciones para realizar quiz</span>
        </div>
        <div className="info-list">
          <div className="info">
            1. Tienes sólo <span>15 segundos</span> por cada pregunta.
          </div>
          <div className="info">
            2. Una vez que seleccione su respuesta, no se puede deshacer.
          </div>
          <div className="info">
            3. No puede seleccionar ninguna opción una vez que se acaba el
            tiempo.
          </div>
          <div className="info">
            4. No puedes salir del Quiz mientras estás jugando.
          </div>
          <div className="info">
            5. Obtendrá puntos en función de sus respuestas correctas.
          </div>
        </div>
        <div className="buttons">
          <button className="quit">Salir</button>
          <button className="restart">Continuar</button>
        </div>
      </div>

      <div className="quiz_box">
        <header>
          <div className="title"> Quiz - Ciencias </div>
          <div className="timer">
            <div className="time_left_txt">Tiempo</div>
            <div className="timer_sec">15</div>
          </div>
          <div className="time_line"></div>
        </header>
        <section>
          <div className="que_text"></div>
          <div className="option_list"></div>
        </section>

        <footer>
          <div className="total_que"></div>
          <button className="next_btn">Siguiente</button>
        </footer>
      </div>

      <div className="result_box">
        <div className="icon">
          <i className="fas fa-crown"></i>
        </div>
        <div className="complete_text">¡Has completado el Quiz!</div>
        <div className="score_text"></div>
        <div className="buttons">
          <button className="restart">Una vez más</button>
          <button className="quit">Salir </button>
        </div>
      </div>
    </div>
  );
};

export default Quizzciencias;