import React, { useEffect, useState } from "react";
import data from "./DataBase.json";

export default function Finanzas() {
  const userData = JSON.parse(localStorage.getItem("user_Logued"));
  const empleadoCedula = userData.cedula;

  const [empleados, setEmpleados] = useState([]);
  const [sedeEncontrada, setSedeEncontrada] = useState("");

  useEffect(() => {
    // Buscar la sede basándose en la cédula del empleado
    let sedeEncontrada = null;
    Object.keys(data).forEach((sede) => {
      const empleados = data[sede].empleados;
      const empleadoEncontrado = empleados.find((empleado) => empleado.cedula === empleadoCedula);
      if (empleadoEncontrado) {
        sedeEncontrada = sede;
      }
    });

    setSedeEncontrada(sedeEncontrada);

    // Filtrar empleados de la misma sede, excluyendo al empleado actual
    if (sedeEncontrada) {
      const empleadosSede = data[sedeEncontrada].empleados.filter(
        (empleado) => empleado.cedula !== empleadoCedula
      );
      setEmpleados(empleadosSede);
    }
  }, [empleadoCedula]);

  const obtenerRutaAsignada = (empleado) => {
    const rutasAsignadas = data[sedeEncontrada].rutasAsignadas || [];
    const rutaAsignada = rutasAsignadas.find((ruta) => ruta.cedula === empleado.cedula);
    return rutaAsignada ? rutaAsignada.ruta : "-";
  };

  const obtenerMovilAsignado = (empleado) => {
    const rutasAsignadas = data[sedeEncontrada].rutasAsignadas || [];
    const rutaAsignada = rutasAsignadas.find((ruta) => ruta.cedula === empleado.cedula);
    if (rutaAsignada) {
      const moviles = data[sedeEncontrada].moviles || [];
      const movilAsignado = moviles.find((movil) => movil.numero === rutaAsignada.movil.toString());
      return movilAsignado ? (
        <div>
          Número: {movilAsignado.numero}
          <br />
          Placa: {movilAsignado.placa}
        </div>
      ) : (
        "Sin móvil asignado"
      );
    }
    return "-";
  };

  const obtenerCantidadClientes = (empleado) => {
    const rutas = data[sedeEncontrada].rutas || [];
    const rutasAsignadas = data[sedeEncontrada].rutasAsignadas || [];
    const rutaAsignada = rutasAsignadas.find((ruta) => ruta.cedula === empleado.cedula);
    if (rutaAsignada) {
      const ruta = rutas.find((ruta) => ruta.ruta === rutaAsignada.ruta);
      return ruta ? ruta.clientes : "-";
    }
    return "-";
  };

  const obtenerTotalFacturas = (empleado) => {
    const bitacora = data[sedeEncontrada].bitacora || [];
    const facturas = bitacora.filter((factura) => factura.cedula === empleado.cedula);
    const totalFacturas = facturas.reduce((total, factura) => total + parseInt(factura.monto), 0);
    return totalFacturas;
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Bitácoras Diarias Generadas</h1>
      {sedeEncontrada && (
        <>
          <h2>Sede: {sedeEncontrada}</h2>
          <table className="table table-bordered">
            <thead className="table-primary">
              <tr>
                <th scope="col">Colaborador</th>
                <th scope="col">Monto Generado</th>
                <th scope="col">Cantidad de Clientes</th>
                <th scope="col">Movil Asignado</th>
                <th scope="col">Ruta Asignada</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado) => {
                const montoGenerado = obtenerTotalFacturas(empleado);
                return (
                  <tr key={empleado.cedula}>
                    <td>{empleado.nombre}</td>
                    <td>{montoGenerado}</td>
                    <td>{obtenerCantidadClientes(empleado)}</td>
                    <td>{obtenerMovilAsignado(empleado)}</td>
                    <td>{obtenerRutaAsignada(empleado)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
