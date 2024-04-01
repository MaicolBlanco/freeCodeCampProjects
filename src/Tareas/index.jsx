import React from "react";
import "./Styles/index.css";
import ListaTareas from "./Componentes/ListaTareas";

export default function Tareas() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1 className="tareas-titulo">Mis Tareas</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}
