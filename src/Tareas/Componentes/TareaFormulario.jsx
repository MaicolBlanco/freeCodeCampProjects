import React from "react";
import "../Styles/TareaFormulario.css";

function TareaFormulario(props) {
  const [input, setInput] = React.useState('');

  const manejarCambio = event => {
    // console.log("Escribiendo...");
    setInput(event.target.value);
    // console.log(event.target.value);
  }

  const manejarEnvio = (event) => {
    event.preventDefault();
    // console.log('Enviando formulario..');
    const tareaNueva = {
      id: "34545",
      texto: input,
      completada: false,
    }
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
