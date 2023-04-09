import {React} from 'react';
import {Link} from 'react-router-dom';
import { Navbar } from '../Navbar';
import Footer from '../Footer';


function Home() {
  return (
    <div>
        <Navbar></Navbar>
          <h1>Hello, Here HomePage</h1>
          <Link to={``}></Link>
        <Footer></Footer>
      </div>
  );
}

export default Home;