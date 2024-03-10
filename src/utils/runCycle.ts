import { BoardType, CellCoordinatesArrayType } from '../types';
import { getLiveNeighborsCount } from './getLiveNeighborsCount';

export const runCycle = (
  board: BoardType,
  toggleAlive: (rowIndex: number, columnIndex: number) => void,
  incrementCycleCount: () => void,
  addToLiveCellsHistory: (currentAliveCells: CellCoordinatesArrayType) => void,
) => {
  let currentAliveCells: CellCoordinatesArrayType = [];
  let arrayOfCellsToChange: CellCoordinatesArrayType = [];

  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      // record current live cells
      if (cell.isAlive) {
        currentAliveCells = [...currentAliveCells, { rowIndex, columnIndex }];
      }

      // calculate next stage live cells
      const aliveNeighborsCount = getLiveNeighborsCount(
        rowIndex,
        columnIndex,
        board,
      );
      if (cell.isAlive && aliveNeighborsCount < 2) {
        // should be dead from underpopulation
        arrayOfCellsToChange = [
          ...arrayOfCellsToChange,
          { rowIndex, columnIndex },
        ];
      } else if (cell.isAlive && aliveNeighborsCount > 3) {
        // should be dead from overpopulation
        arrayOfCellsToChange = [
          ...arrayOfCellsToChange,
          { rowIndex, columnIndex },
        ];
      } else if (!cell.isAlive && aliveNeighborsCount === 3) {
        // should be born if next to 3 live cells
        arrayOfCellsToChange = [
          ...arrayOfCellsToChange,
          { rowIndex, columnIndex },
        ];
      }
    });
  });

  // make record of current board state
  addToLiveCellsHistory(currentAliveCells);

  // toggle cells that should be changed
  arrayOfCellsToChange.forEach(cell => {
    toggleAlive(cell.rowIndex, cell.columnIndex);
  });
  incrementCycleCount();
};
