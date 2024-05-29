import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [password,setPassword] = useState("");
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed)
    {
      str = str + "0123456789";
    }

    if(characterAllowed)
    {
      str = str + "{}[]()$%@#!";
    }

    for(let i = 1; i<=length ; i ++)
    {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)
  } , [length,numberAllowed,characterAllowed,setPassword]);

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,setPassword])

  return (
    <>
      <h1>Password Generator</h1>
      <input type="text"
             readOnly
             value={password}
      />
      <input type="range"
             min={8}
             max={20}
             defaultValue={8}
             onChange={(e)=>setLength(e.target.value)}
      />
      <input type="checkbox"
             defaultChecked={numberAllowed}
             onChange={()=>setNumberAllowed((prev) => !prev)}
      />

    <input type="checkbox"
             defaultChecked={characterAllowed}
             onChange={()=>setCharacterAllowed((prev) => !prev)}
      />

    </>
  )
}

export default App
