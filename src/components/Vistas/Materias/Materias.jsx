import {React} from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const Materias = () => {
    return (
<>
<Navbar/>
<div class="container">
    <div class="card">
      <div class="face face1">
        <div class="content">
          <div class="icon">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <h3>
            <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
          </h3>
          <p>This is where I network and build my professional protfolio.</p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="face face1">
        <div className="content">
          <div className="icon">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <h3>
            <Link to={"https://twitter.com/AdamDipinto"} target="_blank">@AdamDipinto</Link>
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