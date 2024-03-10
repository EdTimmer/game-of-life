import { CellCoordinatesArrayType, CellType } from '../types';

const defaultCell: CellType = {
  isAlive: false,
  // aliveNeighborsCount: 0,
};

export const makePriorBoard = (liveCellsHistory: CellCoordinatesArrayType[]) => {
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

  const last = liveCellsHistory.pop()
  console.log('last :>> ', last);
  if (last?.length) {
    last.forEach(cell => {
      console.log('cell :>> ', cell);
      priorBoard[cell.rowIndex][cell.columnIndex].isAlive = true
    })
  }
  
  // priorBoard[cell.rowIndex][cell.columnIndex].isAlive = true
  return priorBoard
};
