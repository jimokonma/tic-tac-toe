import React from "react";

const SQUARE = (props) => {
  return (
    <button
      className="square"
      onClick={() => {
        props.onclick();
      }}
    >
      {props.value}
    </button>
  );
};
export default SQUARE;
