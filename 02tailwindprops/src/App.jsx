import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Counter from './components/Counter'
import Car from './components/Car'

function App() {
 
  let myObj = {
    user : 'gaurav',
    username : 'GSK23',
    mobile : 8320035757
  }

  let newArr = [1,2,3,4,5,6,7,8,9];

  return (
    <>
      <h1 className="bg-green-400 text-black p-10 rounded-xl">Tailwind Css</h1>
      <Card username="Virat Kolhi" someObject = {myObj} newArr = {newArr} btnText="Visit Me"/>
      <Card/>
      <Counter/>
      <br></br>
      <Car brand_name="TATA" car_name="NANO" ex_showroom="120000"/>
    </>
  )
}

export default App
