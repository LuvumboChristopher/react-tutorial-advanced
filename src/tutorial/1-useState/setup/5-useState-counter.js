import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const resetValue = () => {
    setValue(0)
  }

  return (
    <>
      <h2>useState counter example</h2>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={()=> setValue(value -1)}>Decrease</button>
        <button className='btn' onClick={resetValue}>Reset</button>
        <button className='btn' onClick={()=> setValue(value + 1)}>Increase</button> 
      </section>

    
      <section style={{ margin: '4rem 0' }}>
        <h2>Advanced counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => {
          setTimeout(() => {
            setValue((prevState)=> prevState + 1)
          }, 2000)
        }}>Increase</button>
      </section>
    </>
  );
};

export default UseStateCounter;
