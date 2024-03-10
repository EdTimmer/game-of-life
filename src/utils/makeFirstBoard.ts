import { CellCoordinatesArrayType, CellType } from '../types';

const defaultCell: CellType = {
  isAlive: false,
  // aliveNeighborsCount: 0,
};

export const makeFirstBoard = (liveCellsHistory: CellCoordinatesArrayType[]) => {
  const priorBoard = Array(120)
    .fill(null)
    .map(() =>
      Array(120)
        .fill(null)
        .map(() => ({ ...defaultCell })),
    );
  // console.log('priorBoard :>> ', priorBoard);
  // console.log('liveCellsHistory :>> ', liveCellsHistory);
  // console.log('liveCellsHistory :>> ', liveCellsHistory);
  // const priorLiveCells = liveCellsHistory.slice(-1)
  // console.log('priorLiveCells :>> ', priorLiveCells);

  const first = liveCellsHistory[0]
  // console.log('last :>> ', last);
  if (first.length) {
    first.forEach(cell => {
      // console.log('cell :>> ', cell);
      priorBoard[cell.rowIndex][cell.columnIndex].isAlive = true
    })
  }
  
  // priorBoard[cell.rowIndex][cell.columnIndex].isAlive = true
  return priorBoard
};
