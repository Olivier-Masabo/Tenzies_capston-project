
import { useState } from 'react'
import './App.css'
import Dicebox from './components/DiceBox'
import { nanoid } from "nanoid"

function App() {
  
  const[dice,setDice]=useState(generateAllNewDice)

  function generateAllNewDice(){
    
    return new Array(10).fill(0) .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: true,
                id: nanoid()
            }))
  }
 
  function rolldice(){
    setDice(generateAllNewDice())
  }
  function hold(id){
    console.log(id)
  }
  const dieElement = dice.map(dieObj => <Dicebox key={dieObj.id} number={dieObj.value} isHeld={dieObj.isHeld} hold={hold} id ={dieObj.id}/>)



  return (
    <>
     <h1 className='font-bold text-2xl bg-red-500 text-white'>Hello from tenzies game</h1>
     <div className="w-[35%] border border-gray-800 p-5 grid grid-cols-5 gap-4 mx-auto mt-10 rounded">
     {dieElement}
     </div>
    <div className='flex justify-center items-center mt-5'>

     <button
     onClick={rolldice}
       className="font-semibold text-xl rounded-xl shadow-lg shadow-gray-400 w-35 h-15 border border-gray-300 bg-blue-500 text-white flex justify-center items-center cursor-pointer">
        Roll dice
        </button>
         </div>
    </>
  )
}

export default App
