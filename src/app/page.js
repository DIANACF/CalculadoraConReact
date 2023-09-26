"use client";

import { useState } from 'react';
import './page.css'


export default function Home() {

  const [num,setNum] = useState(0);
  const [num2,setNum2] = useState(0);
  const [operacion,setOperacion] = useState();

  function PonerNumero(e){
    let Pnumero = e.target.value

    if(num===0){

      setNum(Pnumero);
    }
    else{
      setNum(num + Pnumero)
    }
    
  
  }

  function porcentaje (){
  setNum(num/100);
  }

  function operaciones(e){
    let oper = e.target.value
    setOperacion(oper);
    setNum2(num);
    setNum(0);

  }

  function calcular (){
    
    if (operacion === "+"){

      setNum(parseFloat(num2) + parseFloat(num));

    }else if (operacion === "-"){

      setNum(parseFloat(num2) - parseFloat(num));

    }else if(operacion === "x"){

      setNum(parseFloat(num2) * parseFloat(num));

    }else if(operacion ==="/"){
      setNum(parseFloat(num2) / parseFloat(num));

    }
  }

  function limpiar (){
    setNum(0)
  }

 return (
  <>
  <h3 class= "MuestraResultado">{num}</h3>
  <section class="botones" >
   

    <div>
      <button onClick={PonerNumero} value={7}>7</button>
      <button onClick={PonerNumero} value={8}>8</button>
      <button onClick={PonerNumero} value={9}>9</button>
    </div>
      
      
    <div>
      <button onClick={PonerNumero} value={4}>4</button>
      <button onClick={PonerNumero} value={5}>5</button>
      <button onClick={PonerNumero} value={6}>6</button>
    </div>

    <div>
      <button onClick={PonerNumero} value={1}>1</button>
      <button onClick={PonerNumero} value={2}>2</button>
      <button onClick={PonerNumero} value={3}>3</button>
    </div>
    <div>
      <button onClick={PonerNumero} value={0}>0</button>
    </div>  
  </section>

  <section class="BotonesOperaciones">
    <div>
      <button onClick={limpiar}>AC</button>
      <button onClick={porcentaje}>%</button>
      <button onClick={operaciones} value="+">+</button>
      <button onClick={operaciones} value="-">-</button>
      <button onClick={operaciones} value="/">/</button>
      <button onClick={operaciones} value="x">x</button>
      <button onClick={calcular}>=</button>

    </div>

  </section>

  </>
  
 ) 
}
