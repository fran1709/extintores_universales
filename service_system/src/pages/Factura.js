import "bootstrap/dist/css/bootstrap.min.css";
import { NumericFormat } from "react-number-format";
import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Factura() {
  const [showModal, setShowModal] = useState(false);
  const CustomInput = React.forwardRef((props, ref) => (
    <input
      {...props}
      ref={ref}
      className="form-control"
      placeholder="Monto cobrado"
      style={{ width: "25%" }}
    />
  ));

  const textareaRef = useRef(null);
  const textareaRef2 = useRef(null);

  const handleTextareaChange = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Restaurar la altura a "auto" para calcular correctamente la altura del contenido
    textarea.style.height = `${textarea.scrollHeight}px`; // Establecer la altura del textarea según el contenido
  };
  const handleTextareaChange2 = () => {
    const textarea = textareaRef2.current;
    textarea.style.height = "auto"; // Restaurar la altura a "auto" para calcular correctamente la altura del contenido
    textarea.style.height = `${textarea.scrollHeight}px`; // Establecer la altura del textarea según el contenido
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <div style={{ width: "80%", margin: "0 auto"}}>
      <div className="card shadow" style={{}}>
        <h1 className="text-center my-4">Facturando Servicio</h1>
        <form onSubmit={handleSubmit}>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Factura exitosa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ¡La facturación se realizó correctamente!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => setShowModal(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="mb-3">
            <label className="form-label">
              <h3>Fecha de Factura</h3>
            </label>
            <input style={{ width: "50%", margin: "0 auto" }} type="date" className="form-control" />
          </div>
  
          <div className="row " style={{ width: "80%", margin: "0 auto" }}>
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
  
          <div className="my-4" style={{ width: "25%", margin: "0 auto" }}>
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
              <h5>Nota del Servicio</h5>
            </label>
            <textarea
              ref={textareaRef2}
              className="form-control"
              placeholder="Ingrese anotaciones a tener en cuenta (tipo y cantidad de extintores, ...)"
              style={{ height: "auto", width: "77%", margin: "0 auto" }}
              onChange={handleTextareaChange2}
            ></textarea>
          </div>
  
          <div className="mb-3" style={{ width: "77%", margin: "0 auto" }}>
            <label className="form-label">
              <h3>Tipo de Factura</h3>
            </label>
            <select className="form-select" aria-label="Default select example">
              <option>Contado</option>
              <option>Crédito</option>
            </select>
          </div>
  
          <div className="form-check mb-3" style={{ width: "25%", margin: "0 auto" }}>
            <input type="checkbox" className="form-check-input" id="factura" />
            <label className="form-check-label" htmlFor="factura">
              Factura Electrónica
            </label>
          </div>

          <div className="mb-3">
            <label className="form-label">
              <h5>Monto</h5>
            </label>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <NumericFormat
                thousandSeparator={true}
                prefix="₡"
                customInput={CustomInput}
              />
            </div>
          </div>

          <div className="mb-3 form-group">
            <label className="form-label">
              <h3>Nota</h3>
            </label>
            <textarea
              ref={textareaRef}
              className="form-control"
              placeholder="Ingrese anotaciones extra a tener en cuenta (peticiones, sugerencias, sucesos, ...)"
              style={{ height: "auto", width: "77%", margin: "0 auto" }}
              onChange={handleTextareaChange}
            ></textarea>
            <button className="btn btn-primary mt-3">Generar Factura</button>
          </div>
        </form>
      </div>
    </div>
  );
  
}