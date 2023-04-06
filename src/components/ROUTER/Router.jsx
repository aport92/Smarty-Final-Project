import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route>
          <Navbar/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }