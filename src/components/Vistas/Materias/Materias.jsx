import { React } from "react";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import "./materias2.css";
import Math from "../Materias/Mathematics.gif";
import Science from "../Materias/Biologist.gif";
import Language from "../Materias/Bibliophile.gif";

const Materias = () => {
  return (
    <>
      <Navbar />
      <div className="materia1 container1">
        <div className="col">
          <span className="active">
            <div className="box">
              <i className="fa fa-gift" aria-hidden="true"></i>
              <h2>Matemáticas</h2>
              <Link to={"/Quizz1"}>Vamos allá</Link>
            </div>
          </span>
          <span>
            <img src={Math} />
          </span>
        </div>
        <div className="col">
          <span>
            <img src={Language} />
          </span>
          <span className="active">
            <div className="box">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <h2>Lenguaje y Literatura</h2>
              <Link to={"/Quizz2"}>Vamos allá</Link>
            </div>
          </span>
        </div>
        <div className="col">
          <span className="active">
            <div className="box">
              <i className="fa fa-globe" aria-hidden="true"></i>
              <h2>Ciencias Naturales</h2>
              <Link to={"Quizz3"}>Vamos allá</Link>
            </div>
          </span>
          <span>
            <img src={Science} />
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Materias;
