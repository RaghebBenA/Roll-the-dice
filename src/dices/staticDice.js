import React from "react";
import "./dices.css";

const StaticD = ({ number }) => {
  return (
    <div className="staticDice">
      <img src={number} alt="dice" style={{width:"250px" , height:"250"}} />
    </div>
  );
};

export default StaticD;
