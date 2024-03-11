import { BoardType, CellCoordinatesArrayType, CellCoordinatesType } from '../types';
import { getLiveNeighborsCount } from './getLiveNeighborsCount';

export const runCycle = (
  board: BoardType,
  toggleAlive: (rowIndex: number, columnIndex: number) => void,
  incrementCycleCount: () => void,
  addToLiveCellsHistory: (currentAliveCells: CellCoordinatesArrayType) => void,
) => {
  // let currentAliveCells: CellCoordinatesArrayType = [];
  let currentAliveCells: CellCoordinatesType[] = [];
  // let currentAliveCells: {
  //   rowIndex: number;
  //   columnIndex: number;
  // }[] = [];
  let arrayOfCellsToChange: CellCoordinatesType[] = [];

  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      // record current live cells
      // if (cell.isAlive) {
      //   currentAliveCells = [...currentAliveCells, { rowIndex, columnIndex }];
      // }

      if (cell.isAlive) {
        currentAliveCells.push({ rowIndex, columnIndex });
      }

      // calculate next stage live cells
      // const aliveNeighborsCount = getLiveNeighborsCount(
      //   rowIndex,
      //   columnIndex,
      //   board,
      // );
      const aliveNeighborsCount = getLiveNeighborsCount(rowIndex, columnIndex, board);

      const shouldBeChanged = (cell.isAlive && (aliveNeighborsCount < 2 || aliveNeighborsCount > 3)) ||
        (!cell.isAlive && aliveNeighborsCount === 3);

      if (shouldBeChanged) {
        arrayOfCellsToChange.push({ rowIndex, columnIndex });
      }

      // if (cell.isAlive && aliveNeighborsCount < 2) {
      //   // should be dead from underpopulation
      //   arrayOfCellsToChange = [
      //     ...arrayOfCellsToChange,
      //     { rowIndex, columnIndex },
      //   ];
      // } else if (cell.isAlive && aliveNeighborsCount > 3) {
      //   // should be dead from overpopulation
      //   arrayOfCellsToChange = [
      //     ...arrayOfCellsToChange,
      //     { rowIndex, columnIndex },
      //   ];
      // } else if (!cell.isAlive && aliveNeighborsCount === 3) {
      //   // should be born if next to 3 live cells
      //   arrayOfCellsToChange = [
      //     ...arrayOfCellsToChange,
      //     { rowIndex, columnIndex },
      //   ];
      // }
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
