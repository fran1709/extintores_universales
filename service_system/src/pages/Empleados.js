export default function Empleados() {
  return (
    <body>
      <h1>Empleados</h1>
      <form>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha de Contrato</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Correo</th>
              <th scope="col">Salario</th>
              <th scope="col">Puesto</th>
              <th scope="col">Estado</th>
              <th scope="col">Nota</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>03/01/2017</td>
              <td>Josué Quesada</td>
              <td>23</td>
              <td>846532486</td>
              <td>qwery@gmail.com</td>
              <td>300000</td>
              <td>Colaborador</td>
              <td>Activo</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>03/01/2015</td>
              <td>Francisco Ovares</td>
              <td>25</td>
              <td>846532486</td>
              <td>qwery@gmail.com</td>
              <td>300000</td>
              <td>Colaborador</td>
              <td>Desactivado</td>
              <td>Renuncia</td>
            </tr>
            <tr>
              <th scope="row">...</th>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
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
    </body>
  );
}
