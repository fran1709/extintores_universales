import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import DataBase from "./DataBase.json"

export default function Rutas() {
  const [data, setData] = useState([
    {
      ruta: "",
      movil: "",
      colaborador: "Francisco Ovares",
    },
    {
      ruta: "",
      movil: "",
      colaborador: "Mariana Artavia",
    },
    {
      ruta: "",
      movil: "",
      colaborador: "Josué Quesada",
    },
    {
      ruta: "",
      movil: "",
      colaborador: "Andrik Solano",
    },
    {
      ruta: "",
      movil: "",
      colaborador: "Javier Arias",
    },
  ]);

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
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.colaborador}</td>
                <td>
                  <select
                    className="form-select"
                    value={item.movil}
                    onChange={(event) => {
                      const newData = [...data];
                      newData[index].movil = event.target.value;
                      setData(newData);
                    }}
                  >
                    <option>Movil #1</option>
                    <option>Movil #2</option>
                    <option>Movil #3</option>
                  </select>
                </td>
                <td>
                  <select
                    className="form-select"
                    value={item.ruta}
                    onChange={(event) => {
                      const newData = [...data];
                      newData[index].ruta = event.target.value;
                      setData(newData);
                    }}
                  >
                    <option value="">Seleccione una ruta</option>
                    {Object.keys(DataBase).map((ciudad, index) =>
                      DataBase[ciudad].rutas.map((ruta, index) => (
                        <option key={index} value={ruta.ruta}>
                          {ciudad} - {ruta.ruta} ({ruta.clientes} clientes)
                        </option>
                      ))
                    )}
                  </select>
                </td>
              </tr>
            ))}
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
