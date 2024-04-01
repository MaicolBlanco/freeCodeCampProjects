import React from "react";
import { TareaFormulario } from "./TareaFormulario";
import { Tarea } from "./Tarea";
import "../Styles/ListaTareas.css";

function ListaTareas() {
  const [tareas, setTareas] = React.useState([]);

  const agregarTarea = (tarea) => {
    console.log("Tarea agregada");
    console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      /* La tarea que se incluye se lista al principio del arreglo  */
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
          />
        ))}
      </div>
    </>
  );
}
export default ListaTareas;
