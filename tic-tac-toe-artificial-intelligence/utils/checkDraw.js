const checkDraw = (grid) => {
  return !grid.some((square) => square === null);
};

export default checkDraw;
