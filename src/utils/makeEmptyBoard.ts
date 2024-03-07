import { CellType } from "../types";

const defaultCell: CellType = {
  isAlive: false,
  aliveNeighborsCount: 0,
};

export const makeEmptyBoard = () => {
  const newBoard = Array(42)
    .fill(null)
    .map(() => Array(42).fill(null)
      .map(() => ({ ...defaultCell })))
  return newBoard
}