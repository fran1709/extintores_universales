import "bootstrap/dist/css/bootstrap.min.css";
export default function Factura(){  
    return (
        <body>
            <h1>Facturando Servicio</h1>
            <form>
                <div class="mb-3">
                    <h3>Fecha de Factura </h3><br></br>
                    <input type="date"></input>
                </div>
                <br></br> 
                    <h4>Teléfono <br></br><input placeholder="Ingrese # telefono cliente"></input></h4>
                    <h4>Dirección <br></br><input placeholder="Ingrese dirección cliente"></input></h4>
                <br></br><br></br> 
                <h4>Servicio Brindado</h4>
                <label><label><input class="form-check-input me-1" type="checkbox"></input> Mantenimiento </label>
                <label><input class="form-check-input me-1" type="checkbox"></input> Recarga </label>
                <label> <input class="form-check-input me-1" type="checkbox"></input> Capacitación </label>
                <label> <input class="form-check-input me-1" type="checkbox"></input> Venta </label> <br></br>
                <label>Nota de Servicio <br></br><textarea placeholder="Ingrese anotaciones a tener en cuenta"></textarea></label></label>
                <h5>Nota de Servicio</h5>
                <h3>Tipo de Factura</h3><br></br>
                    <select aria-label="Default select example">
                        <option>Contado</option>
                        <option>Crédito</option>
                    </select >
                    <br></br><br></br>
                    <label >Factura Electrónica <input type="checkbox" class="form-check-input"></input></label>
                    <br></br><br></br>
                <h3>Nota</h3>
                    <textarea placeholder="Ingrese anotaciones a tener en cuenta"></textarea>
                <br></br><br></br>
                <button class="btn btn-primary">Enviar</button>
            </form>
        </body>
    );
}