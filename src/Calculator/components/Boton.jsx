import React from "react";
import "../style/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  /* Se puede realizar de esta forma con una expresion js dentro de la clase con un ternario para decidir si 
  esOperador o no lo es y se modifiquen las clases */
  // return (
  //   <div
  //     className={`btn-container ${
  //       esOperador(props.children) ? "operador" : ""
  //     }`.trimEnd()}
  //     onClick={() => props.manejarClic(props.children)}
  //   >
  //     {props.children}
  //   </div>
  // );

  /* ö se puede por medio de un condicional y que retorne cada uno la clase definida */

  if (esOperador(props.children)) {
    return (
      <button
        className="btn-container operador"
        onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <div
        className="btn-container"
        onClick={() => props.manejarClic(props.children)}
      >
        {props.children}
      </div>
    );
  }
}

export default Boton;
