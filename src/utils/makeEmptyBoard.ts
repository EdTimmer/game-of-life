import { CellType } from '../types';

const defaultCell: CellType = {
  isAlive: false,
};

export const makeEmptyBoard = () => {
  const newBoard = Array(120)
    .fill(null)
    .map(() =>
      Array(120)
        .fill(null)
        .map(() => ({ ...defaultCell })),
    );
  return newBoard;
};
