"use client";

import { useState } from 'react';


 let Num1
 let Num2

function  Suma(Num1, Num2){
  return (Num1 + Num2);
}

function Resta(Num1, Num2){
  return (Num1 - Num2);
}

function Mult (Num1, Num2){
  return (Num1 * Num2);
}

function Dividir (Num1, Num2){
  return (Num1/Num2);
}

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  
 return (
  <>
  <input placeholder='Ingrese La Operación'></input>
  <section class="botones" >
    <div>
      <button>0</button>
    </div>

    <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
    </div>
      
      
    <div>
      <button>4</button>
      <button>5</button>
      <button>6</button>
    </div>

    <div>
      <button>7</button>
      <button>8</button>
      <button>9</button>
    </div>
      
  </section>

  <section class="operaciones">
    <div>
      <button>C</button>
      <button>%</button>
      <button>+</button>
      <button>-</button>
      <button>/</button>
      <button>x</button>
      <button>=</button>

    </div>

  </section>

  </>
  
 ) 
}
