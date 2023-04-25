import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import $ from 'jquery';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#2096F3 '}}>
      <div className="container-fluid">
        <Link style={{color: 'white'}} to="/" className="navbar-brand" >
          Extintores Universales
        </Link>
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
            {/*<CustomLink to="Factura">Facturar</CustomLink>
            <CustomLink to="Reportes">Bitácora</CustomLink>*/}
            <CustomLink to="Rutas">Asignar Ruta</CustomLink>
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
      <Link to={to} className={`nav-link ${isActive ? "active" : ""}`} style={{color: 'white'}} {...props}>
        {children}
      </Link>
    </li>
  );
}