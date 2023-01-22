import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Extintores Universales
      </Link>
      <ul>
        <CustomLink to="Factura">Facturas</CustomLink>
        <CustomLink to="Reportes">Reportes</CustomLink>
        <CustomLink to="Finanzas">Finanzas</CustomLink>
        <CustomLink to="Activos">Activos</CustomLink>
        <CustomLink to="Empleados">Empleados</CustomLink>
        <CustomLink to="Rutas">Rutas</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
