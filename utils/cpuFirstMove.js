const cpuFirstMove = (newGrid, isCrossesTurn) => {
  const moves = [0, 2, 6, 8];

  const randomMove = moves[Math.floor(Math.random() * 4)];
  newGrid[randomMove] = isCrossesTurn ? "0" : "X";
};

export default cpuFirstMove;
