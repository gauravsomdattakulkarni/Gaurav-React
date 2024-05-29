import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css';

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [characterAllowed , setCharacterAllowed] = useState(false)
  const [password , setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () =>{
    let pass = "";
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

    setPassword(pass);

  } ,[length,numberAllowed,characterAllowed,setPassword] )

  const copyPasswordToClicpboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,30);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordGenerator()
  } , [length,numberAllowed,characterAllowed,passwordGenerator] )

  return (
    <>
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900" style={{ padding: '100px' }}>
    <h1 className="text-5xl font-extrabold text-white mb-10">Password Generator</h1>
    <div className="w-full max-w-lg bg-gray-800 shadow-xl rounded-lg p-6 space-y-6">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-3 px-4 rounded-l-lg bg-gray-900 text-white"
          placeholder="Generated Password"
          ref={passwordRef}
          readOnly
        />
        <button
          className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-r-lg"
          onClick={copyPasswordToClicpboard}
        >
          Copy
        </button>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-white text-lg">Length: {length}</label>
          <input
            type="range"
            min={8}
            max={20}
            className="cursor-pointer"
            defaultValue={8}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-white text-lg">Include Numbers</label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={(e) => setNumberAllowed((prev) => !prev)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-white text-lg">Include Special Characters</label>
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            onChange={(e) => setCharacterAllowed((prev) => !prev)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default App
