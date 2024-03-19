import React from "react";
import "./Styles/index.css";
import { TareaFormulario } from "./Componentes/TareaFormulario";

export default function Tareas() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1 className="tareas-titulo">Mis Tareas</h1>
        <TareaFormulario />
      </div>
    </div>
  );
}
