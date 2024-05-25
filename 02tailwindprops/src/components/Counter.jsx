import React, { useState } from 'react'

function Counter() {
    let [counter,setCounter] = useState(0);

    const SetValue = () => {
        // counter = counter + 1;
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeValue = () => {
      if(counter>0)
      {
        counter = counter - 1;
      }
      setCounter(counter);
    }
  return (
    <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={SetValue}>Add Value {counter}</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={removeValue}>Remove Value {counter}</button>
    </div>
  )
}

export default Counter