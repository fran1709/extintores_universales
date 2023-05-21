import {React, useState} from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import DataBase from "./DataBase.json";


function Login() {
  const [goToHomePage, setGoToHomePage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleLogin = async (event) => {
    event.preventDefault();
    const cedula = event.target.cedula.value;
    const password = event.target.password.value;
    console.log("Ingresadas->", cedula, password);
      
    try {
      let user_Logued;
      // Loop through each branch
      for (const branch of Object.values(DataBase)) {
        console.log(Object.keys(DataBase).branch);
        // Search for an employee that matches the credentials in the current branch
        user_Logued = branch.empleados.find((user_Logued) => user_Logued.cedula === cedula && user_Logued.password === password);
        if (user_Logued) {
          console.log(user_Logued);
          setShowModal(true);
          //localStorage.setItem('sede', JSON.stringify(sede));
          break; // Stop searching if a user is found
        }
      }
      if (!user_Logued) {
        throw new Error("Credenciales incorrectas");
      } else {  
        setTimeout(() => {
          setGoToHomePage(true);
        }, 1750);
        // Escribir los datos del usuario en el archivo JSON

        localStorage.setItem('user_Logued', JSON.stringify(user_Logued));
        //alert("Bienvenido! " + user_Logued.nombre);
      }
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión. Verifica tus credenciales e intenta nuevamente.");
    } 
  };

  
  if (goToHomePage) {
    return <Navigate to="/Homepage"/>;
  }  

  return (
    <Container fluid className="h-100">
      <Row className="h-100 align-items-center justify-content-center">
        <Col md={6} lg={4} className="bg-light p-4 rounded">
          <div className="d-flex justify-content-center">
            <img
              src="https://static.wixstatic.com/media/d72c19_e2f6bf6326f64c82b147b4b302c1148d~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/d72c19_e2f6bf6326f64c82b147b4b302c1148d~mv2.jpg"
              alt="Extintor"
              className="w-50"
            />
          </div>
          <h1 className="text-center mb-4">Inicio de Sesión</h1>
          <Form onSubmit={handleLogin}>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Login exitoso</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                ¡El inicion de sesión se realizó correctamente!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={() => setShowModal(false)}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
            <Form.Group controlId="cedula">
              <Form.Label>Cédula</Form.Label>
              <Form.Control placeholder="Ingresa tu cedula" required />
            </Form.Group>
  
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" required />
            </Form.Group>
  
            <Button variant="primary" type="submit" className="w-100 mt-4">
              Iniciar Sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
  
}

export default Login;