import "bootstrap/dist/css/bootstrap.min.css";

export default function Factura() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Facturando Servicio</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">
            <h3>Fecha de Factura</h3>
          </label>
          <input type="date" className="form-control" />
        </div>

        <div className="row">
          <div className="col-md-6">
            <label className="form-label">
              <h4>Teléfono</h4>
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="Ingrese # telefono cliente"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              <h4>Dirección</h4>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese dirección cliente"
            />
          </div>
        </div>

        <div className="my-4">
          <h4>Servicio Brindado</h4>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="mantenimiento"
            />
            <label className="form-check-label" htmlFor="mantenimiento">
              Mantenimiento
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="recarga"
            />
            <label className="form-check-label" htmlFor="recarga">
              Recarga
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="capacitacion"
            />
            <label className="form-check-label" htmlFor="capacitacion">
              Capacitación
            </label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="venta" />
            <label className="form-check-label" htmlFor="venta">
              Venta
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            <h5>Nota de Servicio</h5>
          </label>
          <textarea
            className="form-control"
            placeholder="Ingrese anotaciones a tener en cuenta"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">
            <h3>Tipo de Factura</h3>
          </label>
          <select className="form-select" aria-label="Default select example">
            <option>Contado</option>
            <option>Crédito</option>
          </select>
        </div>

        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="factura" />
          <label className="form-check-label" htmlFor="factura">
            Factura Electrónica
          </label>
        </div>
        <div className="mb-3 form-group">
            <label className="form-label">
                <h3>Nota</h3>
            </label>
            <textarea
                className="form-control"
                placeholder="Ingrese anotaciones a tener en cuenta"
            ></textarea>
            <button className="btn btn-primary mt-3">Generar Factura</button>
        </div>

        </form>
    </div>
    );
}