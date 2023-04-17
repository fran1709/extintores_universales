import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Rutas() {
  const [data, setData] = useState([
    { ruta: "Ciudad Quesada - Fortuna", clientes: 10, movil: "", colaborador: "" },
    { ruta: "Ciudad Quesada - Aguas Zarcas", clientes: 5, movil: "", colaborador: "" },
    { ruta: "Ciudad Quesada - Zarcero", clientes: 8, movil: "", colaborador: "" },
    { ruta: "San José - Cartago", clientes: 15, movil: "", colaborador: "" },
    { ruta: "Heredia - Alajuela", clientes: 12, movil: "", colaborador: "" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //Aquí iría la lógica para enviar los datos al servidor o hacer lo que necesites
    alert("Asignación de rutas exitosa");
  };

  return (
    <div className="container">
      <h1 className="my-5">Planificación de Rutas</h1>
      <form onSubmit={handleSubmit}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ruta</th>
              <th scope="col">Cantidad de clientes en ruta</th>
              <th scope="col">Movil de ruta</th>
              <th scope="col">Colaborador asignado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.ruta}</td>
                <td>{item.clientes}</td>
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
                    value={item.colaborador}
                    onChange={(event) => {
                      const newData = [...data];
                      newData[index].colaborador = event.target.value;
                      setData(newData);
                    }}
                  >
                    <option>Francisco Ovares</option>
                    <option>Mariana Artavia</option>
                    <option>Josué Quesada</option>
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
