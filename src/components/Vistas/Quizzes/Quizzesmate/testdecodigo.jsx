import { useState } from "react";

function Questions() {
  return (
    <div>
      {questions.map((q) => (
        <div key={q.numb}>
          <p>{q.question}</p>
          <ul>
            {q.options.map((o, index) => (
              <li key={index}>{o}</li>
            ))}
          </ul>
          <input
            type="text"
            value={q.answer}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[q.numb - 1].answer = e.target.value;
              setQuestions(newQuestions);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Questions;

function Questions() {
  const [questions, setQuestions] = useState([
    {
      numb: 1,
      question: "?",
      answer: "",
      options: ["", "", "", ""],
    },
    {
      numb: 2,
      question: "?",
      answer: "",
      options: ["", "", "", ""],
    },
    {
      numb: 3,
      question: "?",
      answer: "",
      options: ["", "", "", ""],
    },
    {
      numb: 4,
      question: "?",
      answer: "",
      options: ["", "", "", ""],
    },
    {
      numb: 5,
      question: "?",
      answer: "",
      options: ["", "", "", ""],
    },
  ]);

  return (
    <div>
      <div className="info_box">
        <div className="info">
          1. Tienes sólo <span>15 segundos</span> por cada pregunta.
        </div>
        <div className="info">
          2. Una vez que seleccione su respuesta, no se puede deshacer.
        </div>
        <div className="info">
          3. No puede seleccionar ninguna opción una vez que se acaba el tiempo.
        </div>
        <div className="info">
          4. No puedes salir del Quiz mientras estás jugando.
        </div>
        <div className="info">
          5. Obtendrá puntos en función de sus respuestas correctas.
        </div>
        <div className="buttons">
          <button className="quit">Salir</button>
          <button className="restart">Continuar</button>
        </div>
      </div>

      <div className="quiz_box">{/* Código de las preguntas aquí */}</div>

      <div className="result_box">{/* Resultados del quiz aquí */}</div>
    </div>
  );
}
