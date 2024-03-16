import { CellCoordinatesArrayType, CellType } from '../types';

const defaultCell: CellType = {
  isAlive: false,
};

export const makeFirstBoard = (
  liveCellsHistory: CellCoordinatesArrayType[],
) => {
  const priorBoard = Array(120)
    .fill(null)
    .map(() =>
      Array(120)
        .fill(null)
        .map(() => ({ ...defaultCell })),
    );

  const first = liveCellsHistory[0];
  if (first.length) {
    first.forEach(cell => {
      priorBoard[cell.rowIndex][cell.columnIndex].isAlive = true;
    });
  }

  return priorBoard;
};
