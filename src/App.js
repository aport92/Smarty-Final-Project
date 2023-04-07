import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/Notfound';
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    
    <Navbar></Navbar>

      <Routes>
        <Route path="/" element={ <Home></Home>}> </Route>
        <Route path="/users" element={ <Users></Users>}> </Route>
        <Route path="/about" element={ <AboutPage></About>}> </Route>
        <Route path="/about" element={ <AboutPage></About>}> </Route>

        <Route path="*" element={ <NotFound/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;