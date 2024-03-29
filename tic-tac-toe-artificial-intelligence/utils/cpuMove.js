import checkDraw from "./checkDraw";
import checkWinner from "./checkWinner";

const cpuMove = (grid, isCrossesTurn, setHasWon, setHasDrawn) => {
  const moves = findMoves(grid, isCrossesTurn);
  const [{ move }] = sortMoves(moves);
  grid[move] = isCrossesTurn ? "0" : "X";
  if (checkWinner(grid, isCrossesTurn ? "0" : "X")) {
    setHasWon(isCrossesTurn ? "0" : "X");
  } else if (checkDraw(grid)) {
    setHasDrawn(true);
  }
};

const findMoves = (grid, isCrossesTurn) => {
  return grid.map((square, index) => {
    if (!square) {
      const futureGrid = [...grid];
      futureGrid[index] = isCrossesTurn ? "0" : "X";
      let value = 0;
      if (checkWinner(futureGrid, "X")) value = Infinity;
      if (index === 4) value++;

      futureGrid[index] = isCrossesTurn ? "X" : "0";
      if (checkWinner(futureGrid, isCrossesTurn ? "X" : "0")) value = 5;
      return { move: index, value };
    } else return { move: index, value: -Infinity };
  });
};

const sortMoves = (moves) => {
  return moves.sort((b, a) => {
    return a.value - b.value;
  });
};

export default cpuMove;
