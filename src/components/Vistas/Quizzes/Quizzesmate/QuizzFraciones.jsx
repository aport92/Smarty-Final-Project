import { ClassNames } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";

const QuizzFraciones = () => {

    return(
       
    <div ClassName="start_btn"><button>Iniciar Quiz</button></div>

   

    <div ClassName="info_box">
        <div ClassName="info-title"><span> Indicaciones para realizar quiz</span></div>
        <div ClassName="info-list">
            <div ClassName="info">1. Tienes sólo <span>15 segundos</span> por cada pregunta.</div>
            <div ClassName="info">2. Una vez que seleccione su respuesta, no se puede deshacer.</div>
            <div ClassName="info">3. No puede seleccionar ninguna opción una vez que se acaba el tiempo.</div>
            <div ClassName="info">4. No puedes salir del Quiz mientras estás jugando.</div>
            <div ClassName="info">5. Obtendrá puntos en función de sus respuestas correctas.</div>
        </div>
        <div ClassName="buttons">
            <button ClassName="quit">Salir</button>
            <button ClassName="restart">Continuar</button>
        </div>
    </div>

    <div ClassName="quiz_box">
        <header>
            <div ClassName="title"> Quiz - Ciencias </div>
            <div ClassName="timer">
                <div ClassName="time_left_txt">Tiempo</div>
                <div ClassName="timer_sec">15</div>
            </div>
            <div ClassName="time_line"></div>
        </header>
        <section>
            <div ClassName="que_text">
               
            </div>
            <div ClassName="option_list">
               
            </div>
        </section>
    );
};
export default QuizzFraciones;