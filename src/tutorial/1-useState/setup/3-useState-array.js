import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
 //Otra manera de usar useState sin tener que importarlo arriba
 const [people, setPeople] = React.useState(data)

 const removeItem = (id) => {
  //Filtrar a las personas usando su id y si no coinciden los metemos en la variable que hemos creado
  let filteredPeople = people.filter((person) => person.id !== id)
  // Establecemos el nuevo grupo sin el que tenga el id que hemos pasado con argumento
  setPeople(filteredPeople)
 }
 return (
  <>
   {people.map((person) => {
    return ( 
     <div key={person.id} className='item'>
      <h4>{person.name}</h4>
      <button onClick={() => removeItem(person.id)}>Remove</button>
     </div>
    )
   })}
   <button className='btn' onClick={() => setPeople([])}>
    Delete items
   </button>
  </>
 )
}

export default UseStateArray
