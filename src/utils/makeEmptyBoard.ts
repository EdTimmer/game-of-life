import { CellType } from "../types";

const defaultCell: CellType = {
  isAlive: false,
  aliveNeighborsCount: 0,
};

export const makeEmptyBoard = () => {
  const newBoard = Array(40)
    .fill(null)
    .map(() => Array(40).fill(null)
      .map(() => ({ ...defaultCell })))
  return newBoard
}