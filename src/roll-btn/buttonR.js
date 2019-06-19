import React from "react";
import "./button.css";

const Button = ({ roll, start }) => {
  return (
    <div className="btn-cont">
      <button
        className="btn"
        onClick={roll}
        type="button"
        disabled={!start ? false : true}
      >
        {!start ? "Roll the Dice" : "Rolling..."}
      </button>
    </div>
  );
};

export default Button;
