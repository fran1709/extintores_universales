import "./pageStyles.css";

export default function Activos() {
  return (
    <div>
      <h1>Visualizacion de Activos</h1>
      <form>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha ultimo uso</th>
              <th scope="col">Ultimo responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Movil #1</td>
              <td>No Disponible</td>
              <td>20/02/2023</td>
              <td>Francisco Ovares</td>
            </tr>
            <tr>
              <td>Movil #2</td>
              <td>Disponible</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Equipo de recarga Movil</td>
              <td>No Disponible</td>
              <td>20/02/2023</td>
              <td>Mariana Artavia</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button class="btn btn-primary">Actualizar</button>
          <button class="btn btn-primary">Añadir</button>
          <button class="btn btn-primary">Modificar</button>
          <button class="btn btn-primary">Eliminar</button>
        </div>
      </form>
    </div>
  );
}
