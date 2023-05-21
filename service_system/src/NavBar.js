import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem("user_Logued"));
  let empleadoTipo = userData ? userData.type : null;
  const navigate = useNavigate();
  const TiposUsuario = new TipoUsuario();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Limpiar localStorage al cerrar sesión
    localStorage.clear();

    // Redirigir a la página de inicio de sesión
    navigate("/Login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#2096F3 ' }}>
      <div className="container-fluid">
        {userData &&(
          <Link style={{ color: 'white' }} to="/HomePage" className="navbar-brand">
          Extintores Universales
          </Link>
        )}
        {!userData &&(
          <Link style={{ color: 'white' }} to="/" className="navbar-brand">
          Extintores Universales
          </Link>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            {empleadoTipo === TiposUsuario.Administrador && (
              <>
                <CustomLink to="BitacorasGenerales">Bitácoras de Colaboradores</CustomLink>
              </>
            )}
            {empleadoTipo === TiposUsuario.AsignadorRuta && (
              <>
                <CustomLink to="Factura">Facturar</CustomLink>
                <CustomLink to="BitacoraDiaria">Generar Bitácora</CustomLink>
                <CustomLink to="Rutas">Asignar Ruta</CustomLink>
              </>
            )}
            {empleadoTipo === TiposUsuario.Colaborador && (
              <>
                <CustomLink to="Factura">Facturar</CustomLink>
                <CustomLink to="BitacoraDiaria">Generar Bitácora</CustomLink>
              </>
            )}
            {userData && (
              <li className="nav-item">
                <button className="nav-link" style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className="nav-item">
      <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`} style={{ color: 'white' }} {...props}>
        {children}
      </Link>
    </li>
  );
}

class TipoUsuario{
  Colaborador = 2;
  Administrador = 0;
  AsignadorRuta = 1;
  TipoUsuario(){
    this.Administrador = 0;
    this.AsignadorRuta = 1;
    this.Colaborador = 2;
  }
}