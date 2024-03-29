const checkUserHasALosingPattern = (index, grid, isCrossesTurn) => {
  if (index === 8) {
    return [grid[0], grid[1], grid[2], grid[3]].some((square) => {
      return square === (isCrossesTurn ? "X" : "0");
    });
  } else if (index === 0) {
    return [grid[5], grid[6], grid[7], grid[8]].some((square) => {
      return square === (isCrossesTurn ? "X" : "0");
    });
  } else if (index === 2) {
    return [grid[2], grid[3], grid[6], grid[7], grid[8]].some((square) => {
      return square === (isCrossesTurn ? "X" : "0");
    });
  } else if (index === 6) {
    return [grid[0], grid[1], grid[2], grid[5]].some((square) => {
      return square === (isCrossesTurn ? "X" : "0");
    });
  }
  return false;
};

//If user goes in opposite corner, you need to pick another corner, this doesn't happen currently

export default checkUserHasALosingPattern;
