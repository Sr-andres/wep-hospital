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
import Odontologia from "./pages/servicios/odontologia";
import Laboratorio from "./pages/servicios/laboratorio";
import Farmacia from "./pages/servicios/farmacia";
import Parto from "./pages/servicios/parto";
import Ambulancia from "./pages/servicios/ambulancia";
import Urgencias from "./pages/servicios/urgencias";
import Terapia from "./pages/servicios/terapia";



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
        <Route path="/odontologia" element={<Odontologia />} />
        <Route path="/laboratorio" element={<Laboratorio />} />
        <Route path="/farmacia" element={<Farmacia />} />
        <Route path="/parto" element={<Parto />} />
        <Route path="/ambulancia" element={<Ambulancia />} />
        <Route path="/urgencias" element={<Urgencias />} />
        <Route path="/terapia" element={<Terapia />} />
      </Routes>
    </Router>
  );
};

export default App;
