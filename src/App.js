import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/Smarty';
import NotFound from './components/pages/Notfound';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>

      <Routes>
        <Route path="/Home" element={ <Home></Home>}> </Route>
        <Route path="/Smarty" element={ <About></About>}> </Route>

        <Route path="*" element={ <NotFound/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;