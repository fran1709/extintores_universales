import "./pageStyles.css";

export default function Finanzas() {
  return (
    <div>
      <h1>Finanzas Generales E.U.</h1>
      <form>
        <table class="center" margin="0" border="1px solid black">
          <tr>
            <th>Sede</th>
            <th>Cantidad Empleados</th>
            <th>Rutas a Cargo</th>
            <th>Ingresos del Mes</th>
            <th>Gastos del Mes</th>
            <th>Ingresos Netos</th>
          </tr>
          <tr>
            <td>San Carlos</td>
            <td>15</td>
            <td>7</td>
            <td>1500000</td>
            <td>250000</td>
            <td>1250000</td>
          </tr>
          <tr>
            <td>San José</td>
            <td>25</td>
            <td>10</td>
            <td>3400000</td>
            <td>700000</td>
            <td>2700000</td>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Heredia</td>
            <td>12</td>
            <td>5</td>
            <td>1200000</td>
            <td>50000</td>
            <td>1150000</td>
          </tr>
        </table>
        <br></br>
        <button>Actualizar Finanzas</button>
      </form>
    </div>
  );
}
