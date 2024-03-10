import { BoardType } from '../types';

export const getLiveNeighborsCount = (
  rowIndex: number,
  columnIndex: number,
  board: BoardType,
) => {
  let liveNeighborsCount = 0;

  const topLeft = { rowIndex: rowIndex - 1, columnIndex: columnIndex - 1 };
  const topCenter = { rowIndex: rowIndex - 1, columnIndex: columnIndex };
  const topRight = { rowIndex: rowIndex - 1, columnIndex: columnIndex + 1 };
  const centerLeft = { rowIndex: rowIndex, columnIndex: columnIndex - 1 };
  const centerRight = { rowIndex: rowIndex, columnIndex: columnIndex + 1 };
  const bottomLeft = { rowIndex: rowIndex + 1, columnIndex: columnIndex - 1 };
  const bottomCenter = { rowIndex: rowIndex + 1, columnIndex: columnIndex };
  const bottomRight = { rowIndex: rowIndex + 1, columnIndex: columnIndex + 1 };

  const neighborCells = [
    topLeft,
    topCenter,
    topRight,
    centerLeft,
    centerRight,
    bottomLeft,
    bottomCenter,
    bottomRight,
  ];

  const filteredNeighborCells = neighborCells.filter(cell => {
    const boardSize = 120;
    return (
      cell.rowIndex > -1 &&
      cell.rowIndex < boardSize &&
      cell.columnIndex > -1 &&
      cell.columnIndex < boardSize
    );
  });

  filteredNeighborCells.forEach(cell => {
    if (board[cell.rowIndex][cell.columnIndex].isAlive) {
      liveNeighborsCount++;
    }
  });

  return liveNeighborsCount;
};
