import { CellType, ShapeEnum } from '../types';
import { glider } from '../shapesData/glider';
import { pulsarPrecursor } from '../shapesData/pulsarPrecursor';
import { whyNot } from '../shapesData/whyNot';
import { lightweightSpaceship } from '../shapesData/lightweightSpaceship';

const defaultCell: CellType = {
  isAlive: false,
};

export const makeShape = (shape: ShapeEnum) => {
  const newBoard = Array(120)
    .fill(null)
    .map(() =>
      Array(120)
        .fill(null)
        .map(() => ({ ...defaultCell })),
    );

  switch (shape) {
    case ShapeEnum.GLIDER:
      glider.forEach(cell => {
        newBoard[cell.rowIndex][cell.columnIndex].isAlive = true;
      });
      break;
    case ShapeEnum.LIGHTWEIGHT_SPACESHIP:
      lightweightSpaceship.forEach(cell => {
        newBoard[cell.rowIndex][cell.columnIndex].isAlive = true;
      });
      break;
    case ShapeEnum.PULSAR_PRECURSOR:
      pulsarPrecursor.forEach(cell => {
        newBoard[cell.rowIndex][cell.columnIndex].isAlive = true;
      });
      break;
    case ShapeEnum.WHY_NOT:
      whyNot.forEach(cell => {
        newBoard[cell.rowIndex][cell.columnIndex].isAlive = true;
      });
      break;
    default:
      glider.forEach(cell => {
        newBoard[cell.rowIndex][cell.columnIndex].isAlive = true;
      });
  }
  return newBoard;
};
