import React from "react";
import { TareaFormulario } from "./TareaFormulario";
import { Tarea } from "./Tarea";
import "../Styles/ListaTareas.css";

function ListaTareas() {
  const [tareas, setTareas] = React.useState([]);

  const agregarTarea = (tarea) => {
    console.log("Tarea agregada");
    console.log(tarea);
  };

  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea texto={tarea.texto} completada={tarea.completada} />
        ))}
      </div>
    </>
  );
}
export default ListaTareas;
