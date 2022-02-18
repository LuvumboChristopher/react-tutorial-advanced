import React, { useState } from 'react'


/**
 * Reglas de Oro
 * los hooks siempre se dven encontrar dentro de los componentes
 * los compnentes deben epeza por mayusculas 
 * No se puede llamar a los Hooks condicionalmente (Ejemplo)
 */

const UseStateBasics = () => {
 /*
  console.log(useState('Hello world'))
 const value = useState(1)[0]
 const handler = useState(1)[1]
 console.log(value, handler)
 console.log(value, handler)

 Basicamente useState es una funcion que devuelve un array y que tiene dos elementos un "estado", y una "funcion" que gestiona ese estado
*/

 const [text, setText] = useState('Hello World'); 
 const handleClick = () => {
  if(text ==='Hello World'){
   setText('Using the useSate function in react');
  }else {
   setText('Hello World')
  }

 }
 return (
  <React.Fragment>
   <h1>{text}</h1>
   <button className='btn' onClick={handleClick}>Change me</button>
  </React.Fragment>
 );
};

export default UseStateBasics
