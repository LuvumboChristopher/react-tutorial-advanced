import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'christopher',
    age: 25,
    message: 'Hey im happy !'
  })

  const handleChange = () => {
    /*
    setPerson('Ahora soy un string pero antes era un objeto por lo que no funcionare')
    */
    
    /*
    setPerson({message: 'Ahora soy un objeto, es una buena idea pero no cambiare solo el mensaje y el resto quedara intacto,, solo cambiere la parte del mensaje'})
    */
    
    // La solucion ?? Usar el spread operator
    setPerson({ ...person, message: 'Ahora solo cambio yo y los demas siguen iguales'})
    
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button class='btn' onClick={handleChange}>Change message</button>
    </>
  );
};

export default UseStateObject;
