import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
  const [input, setInput] = useState("");
  const [formula, setFormula] = useState("");

  function handleClick(event) {
    const value = event.target.value;
    setFormula((prevVal) => {
      return prevVal + value;
    });
    if (value === "+" || value === "-" || value === "x" || value === "/") {
      setInput(value);
    } else {
      setInput((prevVal) => {
        if (
          prevVal === "+" ||
          prevVal === "-" ||
          prevVal === "x" ||
          prevVal === "/"
        ) {
          return value;
        }
        return prevVal + value;
      });
    }
  }

  function handleClear() {
    setInput("");
    setFormula("");
  }

  function handleMultiply(str){
    let arr=str.split("");
    for (let i=0;i<arr.length;i++){
        if (arr[i]==="x"){
            arr[i]="*";
        }
        console.log(arr);
    }
    str=arr.join("");
    console.log(str);
    return str;
  }

  function Calculate(){
    let str=formula;
    if (str.includes("x")){
        str=handleMultiply(str);
    }
    setInput(eval(str));
    // console.log(eval(str));
  }

  return (
    <div id="calculator">
      <Display value={input} formula={formula} />
      <div id="calculator-buttons">
        <Button value="AC" id="clear" onClick={handleClear} />
        <Button value="/" class="formula-button" onClick={handleClick} />
        <Button value="x" class="formula-button" onClick={handleClick} />
        <Button value="7" class="number-button" onClick={handleClick} />
        <Button value="8" class="number-button" onClick={handleClick} />
        <Button value="9" class="number-button" onClick={handleClick} />
        <Button value="-" class="formula-button" onClick={handleClick} />
        <Button value="4" class="number-button" onClick={handleClick} />
        <Button value="5" class="number-button" onClick={handleClick} />
        <Button value="6" class="number-button" onClick={handleClick} />
        <Button value="+" class="formula-button" onClick={handleClick} />
        <Button value="1" class="number-button" onClick={handleClick} />
        <Button value="2" class="number-button" onClick={handleClick} />
        <Button value="3" class="number-button" onClick={handleClick} />
        <button id="equal" onClick={Calculate}>=</button>
        <Button
          value="0"
          class="number-button"
          onClick={handleClick}
          id="zero"
        />
        <Button value="." class="number-button" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
