import {React, useState} from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";
import { collection, getDocs} from "@firebase/firestore";

// Configurar Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDf-dKtAh4Ir4L-e2pE3q40W1c4vFY6--E",
  authDomain: "servicesystem-5c93d.firebaseapp.com",
  projectId: "servicesystem-5c93d",
  storageBucket: "servicesystem-5c93d.appspot.com",
  messagingSenderId: "582019543314",
  appId: "1:582019543314:web:05bf1aa60be5fb5eb503cb"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollecRef = collection(db, "users");
export let isLoggedIn = false;

function Login() {
  const [goToHomePage, setGoToHomePage] = useState(false);
  
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("Ingresadas->", email, password);
    try {
      const data = await getDocs(usersCollecRef);
      let users_db = data.docs.map((doc) => ({ ...doc.data() }));
      console.log(users_db);
      // Verificar si las credenciales son válidas
      let user = users_db.find((user) => user.email === email && user.password === password);
      if (!user) {
        throw new Error("Credenciales incorrectas");
      } else {  
        isLoggedIn = true; // Establecer isLoggedIn a true
        setGoToHomePage(true);
        alert("Bienvenido! " + user.name);
      }
      
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión. Verifica tus credenciales e intenta nuevamente.");
    }
  };

  if (goToHomePage) {
    return <Navigate to="/Homepage" />;
  }

  return (
    <Container fluid className="h-100">
      <Row className="h-100 align-items-center justify-content-center">
        <Col md={6} lg={4} className="bg-light p-4 rounded">
          <div className="d-flex justify-content-center">
            <img src={"https://static.wixstatic.com/media/d72c19_e2f6bf6326f64c82b147b4b302c1148d~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/d72c19_e2f6bf6326f64c82b147b4b302c1148d~mv2.jpg"} alt="Extintor" className="w-50" />
          </div>
          <h1 className="text-center mb-4">Inicio de Sesión</h1>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo electrónico" required />
            </Form.Group>
  
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" required />
            </Form.Group>
  
            <Button  variant="primary" type="submit" className="w-100 mt-4">
              Iniciar Sesión
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
  
}

export default Login;
