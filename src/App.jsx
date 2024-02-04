import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Input } from "./Input";
import { ListaTareas } from "./ListaTareas";

function App() {
  const [tareaIngresada, setTareaIngresada] = useState("");
  const [tareas, setTareas] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (tareaIngresada.trim().length > 3){
      const nuevasTareas = [...tareas, tareaIngresada]
      setTareas(nuevasTareas);
      localStorage.setItem("tareas", JSON.stringify(nuevasTareas))
      setTareaIngresada("");
    } else {
      alert("Ingresa una tarea válida")
    }
  };

  let handleChange = (e) => {
    setTareaIngresada(e.target.value);
  };

  let handleClose = (tareas, tarea) => {
    let tareasFiltradas = tareas.filter((nombre) => nombre !== tarea)
    setTareas(tareasFiltradas)
    localStorage.setItem("tareas", JSON.stringify(tareasFiltradas))
  }

  useEffect(() => {
    const tareasLS = JSON.parse(localStorage.getItem("tareas")) || []
    setTareas(tareasLS)
  },[])

  return (
    <>
      <Container className="d-flex justify-content-center py-5 text-center bg-dark text-white">
        <section className="w-75">
          <div className="mb-4">
            <h1>Bienvenido</h1>
            <p>Ingresa tus tareas</p>
            <Input
              submitHandler={submitHandler}
              handleChange={handleChange}
              value={tareaIngresada}
            />
          </div>

          <ListaTareas tareas={tareas} eliminar={handleClose}/>
        </section>
      </Container>
    </>
  );
}

export default App;
