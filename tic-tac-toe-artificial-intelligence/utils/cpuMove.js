import checkWinner from "./checkWinner";

const cpuMove = (grid, isCrossesTurn, setHasWon) => {
  const moves = findMoves(grid, isCrossesTurn);
  const [{ move }] = sortMoves(moves);
  grid[move] = "X";
  if (checkWinner(grid, "X")) {
    setHasWon("X");
  }
};

const findMoves = (grid, isCrossesTurn) => {
  return grid.map((square, index) => {
    if (!square) {
      const futureGrid = [...grid];
      futureGrid[index] = "X";
      let value = 0;
      if (checkWinner(futureGrid, "X")) value = Infinity;
      if (index === 4) value++;

      futureGrid[index] = "0";
      if (checkWinner(futureGrid, "0")) value = 5;
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
