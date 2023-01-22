import "./App.css";
import NavBar from "./NavBar";
import Homepage from "./pages/Homepage";
import Factura from "./pages/Factura";
import Reportes from "./pages/Reportes";
import Finanzas from "./pages/Finanzas";
import Activos from "./pages/Activos";
import Empleados from "./pages/Empleados"
import Rutas from "./pages/Rutas";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Factura" element={<Factura/>}/>
          <Route path="/Reportes" element={<Reportes/>}/>
          <Route path="/Finanzas" element={<Finanzas/>}/>
          <Route path="/Activos" element={<Activos />} />
          <Route path="/Empleados" element={<Empleados />} />
          <Route path="/Rutas" element={<Rutas />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
