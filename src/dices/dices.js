import React from "react"
import "./dices.css"

const Dice = ({Dice}) => {
    return(
    <div className="Dice">
 <img src={Dice} alt="dice" style={{width:"250px" , height:"250"}} /> 
    </div>
    )
}
export default Dice