import { Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar";
import Smarty from "../pages/Smarty";
import HomePage from "../pages/Home";

export default function () {
  return (
    <Router>
      <Routes>
        <Route>
          <Navbar />
          <Smarty />
          <HomePage />
        </Route>
      </Routes>
    </Router>
  );
}
