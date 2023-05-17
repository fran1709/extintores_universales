import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import DataBase from "./DataBase.json"
import React from "react";

export default function Rutas() {
  const userData = JSON.parse(localStorage.getItem("user_Logued"));
  console.log(userData);

  const empleadoCedula = userData.cedula; // Cédula del empleado que deseas buscar

// Buscar la sede basándose en la cédula del empleado
let sedeEncontrada = null;
Object.keys(DataBase).forEach((sede) => {
  const empleados = DataBase[sede].empleados;
  const empleadoEncontrado = empleados.find((empleado) => empleado.cedula === empleadoCedula);
  if (empleadoEncontrado) {
    sedeEncontrada = sede;
  }
});

// Imprimir el resultado
if (sedeEncontrada) {
  console.log(`La sede del empleado con cédula ${empleadoCedula} es: ${sedeEncontrada}`);
} else {
  console.log(`No se encontró la sede del empleado con cédula ${empleadoCedula}`);
}


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(DataBase);
    //Aquí iría la lógica para enviar los datos al servidor o hacer lo que se necesite
    alert("Asignación de rutas exitosa");
  };

  return (
    <div className="container">
      <h1 className="my-5">Planificación de Rutas</h1>
      <form onSubmit={handleSubmit}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Colaborador</th>
              <th scope="col">Movil Asignado</th>
              <th scope="col">Ruta</th>
            </tr>
          </thead>
          <tbody>
            
              <React.Fragment key={sedeEncontrada}>
                {DataBase[sedeEncontrada].empleados.map((nombre, empleadoIndex) => (
                  <tr key={`${empleadoIndex}`}>
                    <td>{nombre.nombre}</td>
                    <td>
                      <select className="form-select">
                      {DataBase[sedeEncontrada].moviles.map((numero, placa)=>(
                        <option key={`${placa}`}>
                          {numero.numero}
                        </option>
                      ))}
                      </select>
                    </td>
                    <td>
                      <select className="form-select">
                        <option value="">Seleccione una ruta</option>
                        {DataBase[sedeEncontrada].rutas.map((ruta, rutaIndex) => (
                          <option key={`${empleadoIndex}-${rutaIndex}`} value={ruta.ruta}>
                            {sedeEncontrada} - {ruta.ruta} ({ruta.clientes} clientes)
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            
          </tbody>
        </table>
        <br />
        <button type="submit" className="btn btn-primary">
          Completar Asignación
        </button>
      </form>
    </div>
  );
  
}
