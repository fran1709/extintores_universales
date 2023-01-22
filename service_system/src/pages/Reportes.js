import "bootstrap/dist/css/bootstrap.min.css";

export default function Reportes(){
    return (
        <body>
            <h1>Reportes</h1>
            <form>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th >#</th>
                            <th>Fecha</th>
                            <th>Servicio</th>
                            <th>Cliente</th>
                        </tr>
                    </thead> 
                    <tr>
                        <td>1</td>
                        <td>03/01/2023</td>
                        <td>Mantenimiento</td>
                        <td>Josué Quesada</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>20/12/2022</td>
                        <td>Venta</td>
                        <td>Francisco Ovares</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </table>
                <br></br>
                <button>Enviar Reporte</button>
            </form>
        </body>
    );
}