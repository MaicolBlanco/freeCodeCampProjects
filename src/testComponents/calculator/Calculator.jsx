import React from "react";
import "./Calculator.css";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { evaluate } from "mathjs"; // Se instala un paquete ó libreria externa

function Calculator() {
  const [input, setInput] = React.useState("");

  const agregarInput = (valor) => {
    // Verifica si el último carácter en la pantalla es un operador
    const lastCharIsOperator = /[+\-*/]$/.test(input);
    // Verifica si el valor actual es un operador
    const isOperator = /[+\-*/]/.test(valor);
    // Si el último carácter es un operador y el valor actual también es un operador, no hagas nada
    if (lastCharIsOperator && isOperator) {
      return;
    }

    setInput(input + valor);
  };

  /* Se instala una libreria para poder usarla en el botón = y asi poder realizar los calculos 
  de la calculadora, verificar en packege.json/  "dependencies": { "mathjs": "^12.3.1",
  se usa evaluate para usarse en el botón */

  // const calcularResultado = () => {
  //   if (input) {
  //     setInput(evaluate(input));
  //   } else {
  //     alert("Ingrese Valores para realizar calculos")
  //   }
  // };

  /* POdemos realizarlo tambien usando la libreria eva y con un try/catch para el manejo de errores */
  const calcularResultado = () => {
    try {
      // Evalúa la expresión matemática y actualiza el valor en la pantalla
      setInput(eval(input).toString());
    } catch (error) {
      // Maneja errores de sintaxis
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>CALCULADORA</h1>
      <div className="container-calculator">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
