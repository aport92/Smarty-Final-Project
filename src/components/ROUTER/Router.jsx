import { Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar";

export default function Router() {
  return (
    <Router>
      <Routes>
        <Route>
          <Navbar/>
        </Route>
      </Routes>
    </Router>
  );
}
