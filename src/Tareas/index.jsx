import React from "react";
import "./index.css";
import { Tarea } from "./Componentes/Tarea";

export default function Tareas() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1 className="tareas-titulo">Mis Tareas</h1>
        <Tarea texto={"Aprender React"}/>
      </div>
    </div>
  );
}
