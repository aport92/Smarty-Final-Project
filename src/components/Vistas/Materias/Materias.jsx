import {React} from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import '../Materias/materias.css';
import Math from '../Materias/math.png';

const Materias = () => {
    return (
<>
<Navbar/>
<div className="container">
    <div className="card">
      <div className="face face1">
        <div className="content">
          <div className="icon">
          <img src={Math} alt="Not Found" />
          </div>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <h3>
            <Link to={"/Quizz1"} target="_blank">Matemáticas</Link>
          </h3>
          <p>This is where I network and build my professional protfolio.</p>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="face face1">
        <div className="content">
          <div className="icon">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <h3>
            <Link to={""} target="_blank"></Link>
          </h3>
          <p>This is where I read news and network with different social groups.</p>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="face face1">
        <div className="content">
          <div className="icon">
            <i className="fa fa-github-square" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <h3>
            <Link to={"https://github.com/atom888"} target="_blank">atom888</Link>
          </h3>
          <p>This is where I share code and work on projects.</p>
        </div>
      </div>
    </div>
  </div>
<Footer/>
</>
    );
}

export default Materias;