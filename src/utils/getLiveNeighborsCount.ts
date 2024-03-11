import { BoardType } from '../types';

export const getLiveNeighborsCount = (
  rowIndex: number,
  columnIndex: number,
  board: BoardType,
  // boardSize: number = 120 // Assuming board is always square
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

// export const getLiveNeighborsCount = (
//   rowIndex: number,
//   columnIndex: number,
//   board: BoardType,
// ) => {
//   let liveNeighborsCount = 0;

//   const topLeft = { rowIndex: rowIndex - 1, columnIndex: columnIndex - 1 };
//   const topCenter = { rowIndex: rowIndex - 1, columnIndex: columnIndex };
//   const topRight = { rowIndex: rowIndex - 1, columnIndex: columnIndex + 1 };
//   const centerLeft = { rowIndex: rowIndex, columnIndex: columnIndex - 1 };
//   const centerRight = { rowIndex: rowIndex, columnIndex: columnIndex + 1 };
//   const bottomLeft = { rowIndex: rowIndex + 1, columnIndex: columnIndex - 1 };
//   const bottomCenter = { rowIndex: rowIndex + 1, columnIndex: columnIndex };
//   const bottomRight = { rowIndex: rowIndex + 1, columnIndex: columnIndex + 1 };

//   const neighborCells = [
//     topLeft,
//     topCenter,
//     topRight,
//     centerLeft,
//     centerRight,
//     bottomLeft,
//     bottomCenter,
//     bottomRight,
//   ];

//   const filteredNeighborCells = neighborCells.filter(cell => {
//     const boardSize = 120;
//     return (
//       cell.rowIndex > -1 &&
//       cell.rowIndex < boardSize &&
//       cell.columnIndex > -1 &&
//       cell.columnIndex < boardSize
//     );
//   });

//   filteredNeighborCells.forEach(cell => {
//     if (board[cell.rowIndex][cell.columnIndex].isAlive) {
//       liveNeighborsCount++;
//     }
//   });

//   return liveNeighborsCount;
// };
