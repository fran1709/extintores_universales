import "./pageStyles.css";

export default function Activos() {
  return (
    <div>
      <h1>Visualizacion de Activos</h1>
      <form>
        <table class="center" margin="0" border="1px solid black">
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Fecha ultimo uso</th>
            <th>Ultimo responsable</th>
          </tr>
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
        </table>
        <br></br>
        <button>Actualizar Lista Activos</button>
      </form>
    </div>
  );
}
