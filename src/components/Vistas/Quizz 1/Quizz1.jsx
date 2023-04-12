import {React} from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import './Quizz1.css';

const Quizz1 = () => {
  return (
    <>
<Navbar/>
      <div>
        <div ClassName="start_btn"><button>Iniciar Quiz</button></div>

    {/* Indicaciones de quiz */}
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
            <div Class="que_text">
               
            </div>
            <div ClassName="option_list">
               
            </div>
        </section>

      
        <footer>
            <div ClassName="total_que">
               
            </div>
            <button ClassName="next_btn">Siguiente</button>
        </footer>
    </div>

    <div ClassName="result_box">
        <div ClassName="icon">
            <i ClassName="fas fa-crown"></i>
        </div>
        <div ClassName="complete_text">¡Has completado el Quiz!</div>
        <div ClassName="score_text">
            
        </div>
        <div ClassName="buttons">
            <button ClassName="restart">Una vez más</button>
            <button ClassName="quit">Salir </button>
        </div>
    </div>
      </div>
<Footer/>
      </>
  );
}

export default Quizz1;