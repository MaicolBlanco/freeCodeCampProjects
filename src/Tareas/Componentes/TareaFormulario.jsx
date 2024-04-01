import React from "react";
import "../Styles/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = React.useState("");

  const manejarCambio = (event) => {
    // console.log("Escribiendo...");
    setInput(event.target.value);
    // console.log(event.target.value);
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    // console.log('Enviando formulario..');
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    // console.log(tareaNueva);
    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribir Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}
export { TareaFormulario };
