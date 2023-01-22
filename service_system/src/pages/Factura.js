export default function Factura(){  
    return (
        <body>
            <h1>Facturando Servicio</h1>
            <form>
                <br></br>
                <h3>Fecha de Factura </h3><br></br>
                    <input type="date"></input>
                <br></br><br></br>
                <h3>Cédula</h3><br></br>
                    <input type="id" placeholder="Ingrese cédula cliente"></input>
                    <br></br><br></br>
                <h3>Servicio Brindado</h3><br></br>
                    <select>
                        <option>Mantenimiento</option>
                        <option>Recarga</option>
                        <option>Venta</option>
                        <option>Capacitación</option>
                    </select><br></br><br></br>
                <h3>Tipo de Factura</h3><br></br>
                    <select>
                        <option>Contado</option>
                        <option>Crédito</option>
                    </select>
                    <br></br><br></br>
                    <label >Factura Electrónica <input type="checkbox"></input></label>
                    <br></br><br></br>
                <h3>Nota</h3>
                    <textarea width="300px" height="150px" placeholder="Ingrese anotaciones a tener en cuenta"></textarea>
                <br></br><br></br>
                <button>Enviar</button>
            </form>
        </body>
    );
}