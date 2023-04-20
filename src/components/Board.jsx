import { useState } from "react";
import Square from "./Square";
function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const squares = [null, null, null, null, null, null, null, null, null];
  // squares[0] = "X";
  // const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    const nextSquares = squares.slice();
    //nextSquares[0] = "X";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
