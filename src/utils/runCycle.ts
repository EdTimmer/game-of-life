import { BoardType, CellCoordinatesArrayType } from '../types';
import { getLiveNeighborsCount } from './getLiveNeighborsCount';

export const runCycle = (
  board: BoardType,
  toggleAlive: (
    rowIndex: number,
    columnIndex: number,
    isPanning: boolean,
  ) => void,
  incrementCycleCount: () => void,
  addToLiveCellsHistory: (currentAliveCells: CellCoordinatesArrayType) => void,
  isPanning: boolean,
) => {
  let currentAliveCells: CellCoordinatesArrayType = [];
  let arrayOfCellsToChange: CellCoordinatesArrayType = [];

  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      // record current live cells
      if (cell.isAlive) {
        currentAliveCells.push({ rowIndex, columnIndex });
      }
      // calculate next stage live cells
      const aliveNeighborsCount = getLiveNeighborsCount(
        rowIndex,
        columnIndex,
        board,
      );

      const shouldBeChanged =
        (cell.isAlive &&
          (aliveNeighborsCount < 2 || aliveNeighborsCount > 3)) ||
        (!cell.isAlive && aliveNeighborsCount === 3);

      if (shouldBeChanged) {
        arrayOfCellsToChange.push({ rowIndex, columnIndex });
      }
    });
  });

  // make record of current board state
  addToLiveCellsHistory(currentAliveCells);

  // toggle cells that should be changed
  arrayOfCellsToChange.forEach(cell => {
    toggleAlive(cell.rowIndex, cell.columnIndex, isPanning);
  });

  incrementCycleCount();
};
