import "bootstrap/dist/css/bootstrap.min.css";

export default function Reportes(){
    return (
        <body>
            <h1>Reportes</h1>
            <form>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Servicio</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Gasto</th>
                            <th scope="col">Ganancia</th>
                            <th scope="col">Total </th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>Mantenimiento</td>
                            <td>Josué Quesada</td>
                            <td>17000</td>
                            <td>50000</td>
                            <td>33000</td>
                        </tr>
                        <tr>
                            <td>Venta</td>
                            <td>Francisco Ovares</td>
                            <td>20000</td>
                            <td>60000</td>
                            <td>40000</td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <button class="btn btn-primary">Enviar Reporte</button>
            </form>
        </body>
    );
}
