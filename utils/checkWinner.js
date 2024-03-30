function createBinaryGrid(grid, piece) {
  let bin = 0;
  grid.forEach((square, index) => {
    if (square === piece) {
      bin = bin | (1 << index);
    }
  });
  return bin;
}

function checkWinner(grid, piece) {
  const winners = [
    0b111000000, 0b000111000, 0b000000111, 0b100100100, 0b010010010,
    0b001001001, 0b100010001, 0b001010100,
  ];
  const binaryGrid = createBinaryGrid(grid, piece);
  for (const winner of winners) {
    if ((binaryGrid & winner) === winner) {
      return true;
    }
  }
  return false;
}

export default checkWinner;
