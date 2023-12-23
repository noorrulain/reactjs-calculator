import React, { useState } from "react";

function Display(props) {
  return (
    <div className="calc-display">
      <div className="formula">{props.formula}</div>
      <div className="output">{props.value}</div>
    </div>
  );
}

export default Display;
