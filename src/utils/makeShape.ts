import { CellType } from '../types';
import { glider } from '../shapesData/glider';

const defaultCell: CellType = {
  isAlive: false,
};


export const makeShape = (shape: string) => {
  const newBoard = Array(120)
    .fill(null)
    .map(() =>
      Array(120)
        .fill(null)
        .map(() => ({ ...defaultCell })),
    );

  if (shape === 'glider') {
    console.log('shape :>> ', shape);
    glider.forEach(cell => {
      newBoard[cell.rowIndex][cell.columnIndex].isAlive = true
    })
  }
  return newBoard
};
