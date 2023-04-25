import React from 'react';

const Homepage = () => {
  const userData = JSON.parse(localStorage.getItem("user_Logued"));

  // Utiliza userData en tu componente
  console.log("homepage ->", userData);
  return (
    <div>
      <h1>Bienvenido, {userData.nombre}!</h1>
      <p>Tipo de usuario {userData.type === 0 ? 'Administrador de Sede' : userData.type ==1? 'Asignador de Ruta':'Colaborador'}</p>
      <h3>Ruta Asignada</h3>
      <p>adasd</p>
      <h3>Móvil Asignado</h3>
    </div>
  );
}

export default Homepage;