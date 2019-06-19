import React,{useState} from "react";
import "./App.css";
import DiceOne from "./Asset/dice.png";
import DiceTwo from "./Asset/diceTwo.png";
import Dice from "./dices/dices";
import Button from "./roll-btn/buttonR"
import StaticD from "./dices/staticDice";
import { dices, rand } from "./diceArray";

function App() {
  const [choice1,randCh1] = useState(dices[rand(dices)])
  const [choice2,randCh2] = useState(dices[rand(dices)])
  const [rolling,startRoll] = useState(false)
  return (
    <div className="App">
      <h1>Roll Dice</h1>
      {
        rolling ?
      <div className="Dices">
        <Dice Dice={DiceOne} />
        <Dice Dice={DiceTwo} />
      </div>
     :
      <div className="cont">
        <StaticD number={choice1} />
        <StaticD number={choice2} />
      </div>
      }

      <Button 
      roll={()=>{
        randCh1(dices[rand(dices)])
        randCh2(dices[rand(dices)])
        startRoll(true)
        setTimeout(()=>{
          startRoll(false)
        },4000)
      }} 
      start={rolling}
      />
  
    </div>
  );
}

export default App;
