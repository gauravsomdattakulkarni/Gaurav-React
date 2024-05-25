import {useState} from 'react';
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log(counter);
  }

  const removeValue = () => {
    if(counter==0)
    {
      setCounter(0);
    }
    else
    {
      counter = counter - 1;
      setCounter(counter);
      console.log(counter);
    }
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addValue}
      >Add Value {counter}</button>
      <br/><br/>
      <button
        onClick={removeValue}
      >Decrese Value {counter}</button>

      <p>Current Value Of Counter : {counter}</p>
    </>
  )
}

export default App
