import React from 'react'
import { useState } from 'react';

const Prueba = () => {
    // let numero = 0;
   const [numero, setNumero] = useState(0);

    const sumar = () => {
        setNumero(numero + 1);
        // console.log(numero);
        
    }
    const restar = () => {
        setNumero(numero - 1);
        // console.log(numero);
        
    }
    console.log("HOLA ME RENDERIZO DESDE PRUEBA.JSX!!");
    
  return (
    <div>
        <button onClick={sumar}>+</button>
        {numero}
        <button onClick={restar}>-</button>
       
    </div>
  )
}

export default Prueba;