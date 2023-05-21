import React from 'react';
import Database from "./DataBase.json";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  const userData = JSON.parse(localStorage.getItem("user_Logued"));

  // Utiliza userData en tu componente
  console.log("homepage ->", userData);
  const empleadoCedula = userData.cedula; // Cédula del empleado que deseas buscar

  // Buscar la sede basándose en la cédula del empleado
  let sedeEncontrada = null;
  Object.keys(Database).forEach((sede) => {
    const empleados = Database[sede].empleados;
    const empleadoEncontrado = empleados.find((empleado) => empleado.cedula === empleadoCedula);
    if (empleadoEncontrado) {
      sedeEncontrada = sede;
    }
  });

  const getRutaAsignada = (cedula, sede) => {
    const rutasAsignadas = Database[sede]?.rutasAsignadas || [];
    const ruta = rutasAsignadas.find(asignacion => asignacion.cedula === cedula);
    return ruta ? ruta.ruta : "Sin ruta asignada";
  };

  const getMovilAsignado = (cedula, sede) => {
    const rutasAsignadas = Database[sede]?.rutasAsignadas || [];
    const asignacion = rutasAsignadas.find((asignacion) => asignacion.cedula === cedula);
    if (asignacion) {
      const movilAsignado = Database[sede]?.moviles.find((movil) => movil.numero === String(asignacion.movil));
      return movilAsignado ? `Número: ${movilAsignado.numero}, Placa: ${movilAsignado.placa}` : "Sin móvil asignado";
    }
    return "Sin móvil asignado";
  };  

  const empleadoActual = Database[sedeEncontrada]?.empleados.find(empleado => empleado.cedula === empleadoCedula);
  const movilAsignado = empleadoActual ? getMovilAsignado(empleadoActual.cedula, sedeEncontrada) : "Sin móvil asignado";

  return (
    <div className="card shadow">
      <h1 className="mt-4 display-4">¡Bienvenid@, {userData.nombre}!</h1>
      <h4 className="card-text">Tipo de usuario: {userData.type === 0 ? 'Administrador de Sede' : userData.type === 1 ? 'Asignador de Ruta' : 'Colaborador'}</h4>
      <div className="card-body">
        <h2 className="display-5">Ruta Asignada</h2>
        {sedeEncontrada ? (
          <div key={sedeEncontrada}>
            <h5 className="card-text">{sedeEncontrada}</h5>
            {Database[sedeEncontrada].empleados && Database[sedeEncontrada].empleados.length > 0 ? (
              <ul>
                {Database[sedeEncontrada].empleados.map((empleado) => (
                  empleado.cedula === userData.cedula ? (
                    <h5 className="card-text" key={empleado.cedula}>{getRutaAsignada(empleado.cedula, sedeEncontrada)}</h5>
                  ) : null
                ))}
              </ul>
            ) : (
              <p className="card-text">Sin ruta asignada</p>
            )}
          </div>
        ) : (
          <p className="card-text">Sin sede asignada</p>
        )}
      </div>
      <div className="card-body">
        <h2 className="card-title display-5">Móvil Asignado</h2>
        {sedeEncontrada ? (
          <div key={sedeEncontrada}>
            <h5 className="card-title">{sedeEncontrada}</h5>
            <h6 className="card-text">{movilAsignado}</h6>
          </div>
        ) : (
          <p>Sin sede asignada</p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
