import React , {useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
   const [username,setUsername] = useState(null);
   const [password,setPassword] = useState(null);

   const {setUser} = useContext(UserContext)

   const handleSubmit = (e) =>{
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder="User" name='username' id="username"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value)
            }}  
        />
        <input type="password" placeholder="Password" name="password" id="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login