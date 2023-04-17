import "bootstrap/dist/css/bootstrap.min.css";

export default function Reportes() {
  return (
    <div className="container">
      <h1>Bitácora Diaria</h1>
      <form>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Cliente</th>
              <th scope="col">Gasto</th>
              <th scope="col">Ganancia</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mantenimiento</td>
              <td>Josué Quesada</td>
              <td>17,000</td>
              <td>50,000</td>
              <td>33,000</td>
            </tr>
            <tr>
              <td>Venta</td>
              <td>Francisco Ovares</td>
              <td>20,000</td>
              <td>60,000</td>
              <td>40,000</td>
            </tr>
            <tr>
              <td>Limpieza</td>
              <td>Maria Rodriguez</td>
              <td>8,500</td>
              <td>20,000</td>
              <td>11,500</td>
            </tr>
            <tr>
              <td>Instalación</td>
              <td>Andrea Valverde</td>
              <td>15,000</td>
              <td>35,000</td>
              <td>20,000</td>
            </tr>
            <tr>
              <td>Reparación</td>
              <td>Carlos Gomez</td>
              <td>10,000</td>
              <td>25,000</td>
              <td>15,000</td>
            </tr>
          </tbody>
        </table>
        <br />
        <button className="btn btn-primary">Enviar Bitácora</button>
      </form>
    </div>
  );
}

