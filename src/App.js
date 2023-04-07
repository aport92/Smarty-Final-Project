import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Materias from './components/Materias';
import Registrarse from './components/Registrarse';
import IniciarSesion from './components/IniciarSesion';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/materias" exact component={Materias} />
        <Route path="/registrarse" exact component={Registrarse} />
        <Route path="/iniciar-sesion" exact component={IniciarSesion} />
      </Switch>
    </Router>
  );
}

export default App;
