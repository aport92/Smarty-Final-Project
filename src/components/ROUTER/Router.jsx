import { Router, Routes, Route } from "react-router-dom";
import Home from "../Vistas/Homes/Home";

export default function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

