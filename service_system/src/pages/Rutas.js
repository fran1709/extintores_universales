import "bootstrap/dist/css/bootstrap.min.css";
import DataBase from "./DataBase.json";
import React, { useState } from "react";

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

  const [selectedMoviles, setSelectedMoviles] = useState([]);
  const [selectedRutas, setSelectedRutas] = useState([]);

  const handleMovilSelect = (event, empleadoIndex) => {
    const selectedMovil = event.target.value;
    setSelectedMoviles((prevSelectedMoviles) => {
      const updatedSelectedMoviles = [...prevSelectedMoviles];
      updatedSelectedMoviles[empleadoIndex] = selectedMovil;
      return updatedSelectedMoviles;
    });
  };

  const handleRutaSelect = (event, empleadoIndex) => {
    const selectedRuta = event.target.value;
    setSelectedRutas((prevSelectedRutas) => {
      const updatedSelectedRutas = [...prevSelectedRutas];
      updatedSelectedRutas[empleadoIndex] = selectedRuta;
      return updatedSelectedRutas;
    });
  };

  const isOptionDisabled = (option, selectedOptions) => {
    const selectedCount = selectedOptions.filter((selectedOption) => selectedOption.toString() === option).length;
    return selectedCount >= 2;
  };    

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(DataBase);
    //Aquí iría la lógica para enviar los datos al servidor o hacer lo que se necesite
    alert("Asignación de rutas exitosa");
  };

  return (
    <div className="card shadow">
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
            {DataBase[sedeEncontrada]?.empleados.map((nombre, empleadoIndex) => (
              <tr key={empleadoIndex}>
                <td>{nombre.nombre}</td>
                <td>
                  <select
                    className="form-select"
                    value={selectedMoviles[empleadoIndex] || ""}
                    onChange={(event) => handleMovilSelect(event, empleadoIndex)}
                  >
                    <option value="">Seleccione un móvil</option>
                    {DataBase[sedeEncontrada]?.moviles.map((numero, placa) => (
                      <option
                        key={placa}
                        value={numero.numero}
                        disabled={isOptionDisabled(numero.numero, selectedMoviles)}
                      >
                        {numero.numero}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={selectedRutas[empleadoIndex] || ""}
                    onChange={(event) => handleRutaSelect(event, empleadoIndex)}
                  >
                    <option value="">Seleccione una ruta</option>
                    {DataBase[sedeEncontrada]?.rutas.map((ruta, rutaIndex) => (
                      <option
                        key={`${empleadoIndex}-${rutaIndex}`}
                        value={ruta.ruta}
                        disabled={isOptionDisabled(ruta.ruta, selectedRutas)}
                      >
                        {sedeEncontrada} - {ruta.ruta} ({ruta.clientes} clientes)
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Completar Asignación
          </button>
        </div>
        <br />
      </form>
    </div>
  );
}
