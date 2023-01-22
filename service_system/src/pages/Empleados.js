export default function Empleados(){
    return (
        <body>
            <h1>Empleados</h1>
            <form>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th >#</th>
                            <th>Fecha de Contrato</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>Salario</th>
                            <th>Puesto</th>
                        </tr>
                    </thead> 
                    <tr>
                        <td>1</td>
                        <td>03/01/2017</td>
                        <td>Josué Quesada</td>
                        <td>23</td>
                        <td>846532486</td>
                        <td>qwery@gmail.com</td>
                        <td>300000</td>
                        <td>Colaborador</td>
                    </tr>
                    <tr>
                    <td>1</td>
                        <td>03/01/2015</td>
                        <td>Francisco Ovares</td>
                        <td>25</td>
                        <td>846532486</td>
                        <td>qwery@gmail.com</td>
                        <td>300000</td>
                        <td>Colaborador</td>
                    </tr>
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                </table>
                <br></br>
                <button>Actualizar</button>
                <label>-</label>
                <button>Añadir</button>
                <label>-</label>
                <button>Modificar</button>
                <label>-</label>
                <button>Eliminar</button>
            </form>
        </body>
    );
}