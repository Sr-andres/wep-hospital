// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Servicios from "./pages/Servicios";
import MIPG from "./pages/MIPG";
import Stafin from "./pages/stafin";
import Contra from "./pages/contra";
import Cuentas from "./pages/cuentas";
import Puesto from "./pages/puesto";
import Servicess from "./pages/servicios/general";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/mipg" element={<MIPG />} />
        <Route path="/stafin" element={<Stafin />} />
        <Route path="/contra" element={<Contra />} />
        <Route path="/cuentas" element={<Cuentas />} />
        <Route path="/puesto" element={<Puesto />} />
        <Route path="/servicess" element={<Servicess />} />
      </Routes>
    </Router>
  );
};

export default App;
