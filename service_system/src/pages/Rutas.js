export default function Rutas() {
  return (
    <div>
      <h1>Planificación de Rutas</h1>
      <form>
        <br></br>
        <h3>Ruta</h3> <br></br>
        <select>
          <option>Ciudad Quesada - Fortuna</option>
          <option>Ciudad Quesada - Aguas Zarcas</option>
          <option>Ciudad Quesada - Zarcero</option>
        </select>
        <br></br><br></br>
        <h3>Colaborador</h3>
        <br></br>
        <select>
          <option>Mariana Artavia</option>
          <option>Francisco Ovares</option>
          <option>Josué Quesada</option>
        </select>
        <br></br><br></br>
        <h3>Movil</h3>
        <br></br>
        <select>
          <option>Movil #2</option>
          <option>-</option>
        </select>
        <br></br><br></br>
        <button>Asignar Ruta</button>
      </form>
    </div>
  );
}
