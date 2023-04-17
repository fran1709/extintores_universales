

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
              <th scope="col">Numero de Placa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Movil #1</td>
              <td>No Disponible</td>
              <td>856987</td>
            </tr>
            <tr>
              <td>Movil #2</td>
              <td>Disponible</td>
              <td>741256</td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Proveedor</th>
              <th scope="col">Marca</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Extintor ABC</td>
              <td>10</td>
              <td>Quimicos OCAM</td>
              <td>Quimicos OCAM</td>
            </tr>
            <tr>
              <td>Extintor K</td>
              <td>8</td>
              <td>EDS SA</td>
              <td>EDS SA</td>
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
