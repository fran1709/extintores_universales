import React from "react";
import { Navigate } from "react-router-dom";
import "./pageStyles.css";

function Login() {
  const [goToHomePage, setGoToHomePage] = React.useState(false);
  if (goToHomePage) {
    return <Navigate to="/App" />;
  }

  return (
    <body>
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
            class="btn btn-primary">
            Iniciar Sesion
          </button>
        </div>
    </div>
    </body>
  );
}

export default Login;