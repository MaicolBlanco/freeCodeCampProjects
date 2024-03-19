import React from "react";
import "../Styles/TareaFormulario.css"

function TareaFormulario(props) {
  return (
    <form className="tarea-formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribir Tarea"
        name="texto"
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}
export { TareaFormulario };
