
import { useState } from 'react'
import './App.css'
import Dicebox from './components/DiceBox'
import { nanoid } from "nanoid"

function App() {
  
  const[dice,setDice]=useState(generateAllNewDice)
  

  
     const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)


  function generateAllNewDice(){
    
    return new Array(10).fill(0) .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            }))
  }
 
  function rolldice(){
     setDice(oldDice => oldDice.map(die =>  die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) } ))
  }

  function hold(id){
     setDice(oldDice => oldDice.map(die => die.id === id ? { ...die, isHeld: !die.isHeld } : die
         ))
  }
  const dieElement = dice.map(dieObj => <Dicebox key={dieObj.id} number={dieObj.value} isHeld={dieObj.isHeld} hold={hold} id ={dieObj.id}/>)



  return (
    <>
    <h1 className="font-semibold text-2xl flex justify-center">Tenzies</h1>
            <p className="text-gray-600 flex justify-center">Roll until all dice are the same. Click each die to freeze <br />
             it at its current value between rolls.</p>
     <div className="w-[35%] border border-gray-800 p-5 grid grid-cols-5 gap-4 mx-auto mt-10 rounded">
     {dieElement}
     </div>
    <div className='flex justify-center items-center mt-5'>

     <button
     onClick={rolldice}
       className="font-semibold text-xl rounded-xl shadow-lg shadow-gray-400 w-35 h-15 border border-gray-300 bg-blue-500 text-white flex justify-center items-center cursor-pointer">
       {gameWon ? "New Game" : "Roll Dice"}
        </button>
         </div>
    </>
  )
}

export default App
