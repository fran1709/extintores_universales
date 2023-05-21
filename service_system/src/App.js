import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Homepage from "./pages/Homepage";
import Factura from "./pages/Factura";
import Bitacora from "./pages/BitacoraDiaria";
import Rutas from "./pages/Rutas";
import Login from "./pages/Login";
import Finanzas from "./pages/Finanzas";
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
           />
          <Route path="/Activos" element={<Activos />} />
          <Route path="/Empleados" element={<Empleados />} />*/}
          <Route path="/BitacorasGenerales" element={<Finanzas />} />
          <Route path="/Factura" element={<Factura />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/BitacoraDiaria" element={<Bitacora />}/>
          <Route path="/Rutas" element={<Rutas />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
