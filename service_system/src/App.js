import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Homepage from "./pages/Homepage";
import Factura from "./pages/Factura";
//import Reportes from "./pages/Reportes";
import Rutas from "./pages/Rutas";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpiar localStorage al cerrar sesión
    localStorage.clear();

    // Redirigir a la página de inicio de sesión
    navigate("/Login", { replace: true });
  };

  return (
    <>
      <NavBar handleLogout={handleLogout} />
      <Container className="my-4">
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          {/*
          <Route path="/Reportes" element={<Reportes />} />
          <Route path="/Finanzas" element={<Finanzas />} />
          <Route path="/Activos" element={<Activos />} />
          <Route path="/Empleados" element={<Empleados />} />*/}
          <Route path="/Factura" element={<Factura />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Rutas" element={<Rutas />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
