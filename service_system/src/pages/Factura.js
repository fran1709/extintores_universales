export default function Factura(){  
    return (
        <body>
            <h1>Facturando Servicio</h1>
            <form>
                <h3>Fecha de Factura </h3>
                    <input type="date"></input>
                <h3>Cédula</h3>
                    <input type="id" placeholder="Ingrese cédula cliente"></input>
                <h3>Servicio Brindado</h3>
                    <select>
                        <option>Mantenimiento</option>
                        <option>Recarga</option>
                        <option>Venta</option>
                        <option>Capacitación</option>
                    </select>
                <h3>Tipo de Factura</h3>
                    <select>
                        <option>Contado</option>
                        <option>Crédito</option>
                    </select>
                    <br></br><br></br>
                    <label >Factura Electrónica <input type="checkbox"></input></label>
                <h3>Nota</h3>
                    <textarea width="300px" height="150px" placeholder="Ingrese anotaciones a tener en cuenta"></textarea>
                <br></br><br></br>
                <button>Enviar</button>
            </form>
        </body>
    );
}