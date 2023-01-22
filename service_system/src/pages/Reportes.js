import "bootstrap/dist/css/bootstrap.min.css";

export default function Reportes(){
    return (
        <body>
            <h1>Reportes</h1>
            <form>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Servicio</th>
                            <th scope="col">Cliente</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>03/01/2023</td>
                            <td>Mantenimiento</td>
                            <td>Josué Quesada</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>20/12/2022</td>
                            <td>Venta</td>
                            <td>Francisco Ovares</td>
                        </tr>
                        <tr>
                            <th scope="row">...</th>
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
