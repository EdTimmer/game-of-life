import { CellCoordinatesArrayType, CellType } from '../types';

const defaultCell: CellType = {
  isAlive: false,
};

export const makePriorBoard = (
  liveCellsHistory: CellCoordinatesArrayType[],
) => {
  const priorBoard = Array(120)
    .fill(null)
    .map(() =>
      Array(120)
        .fill(null)
        .map(() => ({ ...defaultCell })),
    );

  const last = liveCellsHistory.pop();
  if (last?.length) {
    last.forEach(cell => {
      priorBoard[cell.rowIndex][cell.columnIndex].isAlive = true;
    });
  }
  return priorBoard;
};
