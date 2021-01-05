import React, { useState } from "react";
import SQUARE from "./components/square";

const App = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [content, setContent] = useState(true);

  const calculateWin = (square) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];

      if (square[a] && square[a] === square[b] && square[b] === square[c])
        return square[a];
    }
  };

  const handleClick = (i) => {
    // const squares = [...square];
    if (winner || square[i]) return;
    square[i] = content ? "X" : "O";
    setContent(!content);
    setSquare(square);
  };
  const winner = calculateWin(square);
  const status = winner
    ? `${winner} wins press f5 to restart`
    : content
    ? "X's turn"
    : "O's turn";
  return (
    <div className="app">
      <div className="status">{status}</div>
      <div className="box">
        {square.map((squr, i) => {
          return (
            <SQUARE
              key={i}
              value={squr}
              onclick={() => {
                handleClick(i);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default App;
