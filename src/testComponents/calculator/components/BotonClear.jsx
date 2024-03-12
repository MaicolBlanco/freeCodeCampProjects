import React from "react";
import "../style/BotonClear.css";

export default function BotonClear(props) {
  return (
    <button className="boton-clear" onClick={props.manejarClear}>
      {props.children}
    </button>
  );
}
