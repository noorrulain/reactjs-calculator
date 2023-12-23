import React from "react";

function Button(props) {
  return (
    <button id={props.id} onClick={props.onClick} className={props.class} value={props.value}>
      {props.value}
    </button>
  );
}

export default Button;
