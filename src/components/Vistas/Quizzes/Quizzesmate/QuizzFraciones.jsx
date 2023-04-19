import React from 'react'

const QuizzFraciones = () => {
  return (
    <div>
        <div className="start_btn"><button>Iniciar Quiz</button></div>


<div className="info_box">
    <div className="info-title"><span> Indicaciones para realizar quiz</span></div>
    <div className="info-list">
        <div className="info">1. Tienes sólo <span>15 segundos</span> por cada pregunta.</div>
        <div className="info">2. Una vez que seleccione su respuesta, no se puede deshacer.</div>
        <div className="info">3. No puede seleccionar ninguna opción una vez que se acaba el tiempo.</div>
        <div className="info">4. No puedes salir del Quiz mientras estás jugando.</div>
        <div className="info">5. Obtendrá puntos en función de sus respuestas correctas.</div>
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
        <div className="que_text">
           
        </div>
        <div className="option_list">
           
        </div>
    </section>

  
    <footer>
        <div className="total_que">
           
        </div>
        <button className="next_btn">Siguiente</button>
    </footer>
</div>

<div className="result_box">
    <div className="icon">
        <i className="fas fa-crown"></i>
    </div>
    <div className="complete_text">¡Has completado el Quiz!</div>
    <div className="score_text">
        
    </div>
    <div className="buttons">
        <button className="restart">Una vez más</button>
        <button className="quit">Salir </button>
    </div>
    </div>
    </div>
  );
};

export default QuizzFraciones