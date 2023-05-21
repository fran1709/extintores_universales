import React, { useState, useEffect, useCallback } from 'react';
import data from './DataBase.json';
import { Modal, Button } from "react-bootstrap";

const Bitacora = () => {
  const [bitacora, setBitacora] = useState([]);
  const userData = JSON.parse(localStorage.getItem("user_Logued"));
  const cedula = userData.cedula;
  let total = 0;
  const [showModal, setShowModal] = useState(false);

  const buscarBitacora = useCallback(() => {
    for (const ciudad in data) {
      const empleados = data[ciudad].empleados;
      for (const empleado of empleados) {
        if (empleado.cedula === cedula) {
          const bitacoraEmpleado = data[ciudad].bitacora.filter(
            (registro) => registro.cedula === cedula
          );
          setBitacora(bitacoraEmpleado);
          break;
        }
      }
    }
  }, [cedula]);
  

  useEffect(() => {
    buscarBitacora();
  }, [buscarBitacora]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="container">
      <h1>Bitácora Diaria</h1>
      <form onSubmit={handleSubmit}>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Bitácora exitosa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ¡El reporte diario de bitácora se realizó correctamente!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setShowModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <table className="table table-bordered" style={{width:"50%", margin:"auto", marginBottom:"50px", marginTop:"50px"}}>
          <thead className="table-light">
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Monto</th>
            </tr>
          </thead>
          <tbody>
            {bitacora.map((registro, index) => (
              <tr key={index}>
                <td >{registro.servicio}</td>
                <td>{registro.monto}</td>
                <script>
                  {total+=parseInt(registro.monto, 10)}
                </script>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-bordered" style={{width:"30%", margin:" auto", marginBottom:"50px", marginTop:"50px"}}>
          <thead className="table-light">
            <tr><th><strong>Total</strong></th></tr>
          </thead>
          <tbody>
            <tr>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={buscarBitacora}>
          Enviar Bitácora
        </button>
      </form>
    </div>
  );
};

export default Bitacora;