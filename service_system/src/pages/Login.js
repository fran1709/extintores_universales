import React from "react";
import { Link, Navigate } from "react-router-dom";
import App from "../App";
import "./pageStyles.css";

function Login() {
  const [goToHomePage, setGoToHomePage] = React.useState(false);
  if (goToHomePage) {
    return <Navigate to="/App" />;
  }

  return (
    <div className="page">
      <div className="cover">
        <h1>Inicio de Sesión</h1>
        <input
          style={{ fontSize: 25, margin: 20 }}
          placeholder="Nombre de usuario"
        ></input>
        <input
          style={{ fontSize: 25, margin: 20 }}
          placeholder="Contraseña"
          type={"password"}
        ></input>
        <button
          onClick={() => {
            setGoToHomePage(true);
          }}
          style={{ fontSize: 25, margin: 20 }}
        >
          Iniciar Sesion
        </button>
      </div>
    </div>
  );
}

export default Login;
