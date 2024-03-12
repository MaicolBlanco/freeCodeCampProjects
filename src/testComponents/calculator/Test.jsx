import React from 'react';

export default function Test(){
  const [display, setDisplay] = React.useState("ola");

  return(
    <div>
      <p>Calculadora</p>
      <div>Display</div>
      <div>{display}</div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <button>=</button>
        <button>0</button>
        <button>.</button>
        <button>/</button>
        <button>Clear</button>
      </div>
    </div>
  );
}