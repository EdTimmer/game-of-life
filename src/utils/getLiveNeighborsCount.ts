import { BoardType } from '../types';

export const getLiveNeighborsCount = (
  rowIndex: number,
  columnIndex: number,
  board: BoardType,
) => {
  let liveNeighborsCount = 0;
  const boardSize = board.length; // For square board

  // Relative positions of all eight neighbors
  const neighbors = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], /* Current Cell */ [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];

  neighbors.forEach(([rowOffset, colOffset]) => {
    const newRow = rowIndex + rowOffset;
    const newCol = columnIndex + colOffset;

    // Check if the neighbor is within the board bounds
    if (newRow >= 0 && newRow < boardSize && newCol >= 0 && newCol < boardSize) {
      // Increment count if the neighbor is alive
      if (board[newRow][newCol].isAlive) {
        liveNeighborsCount++;
      }
    }
  });

  return liveNeighborsCount;
};
