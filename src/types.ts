export interface CellType {
  isAlive: boolean;
  adjacentAliveCount: number;
}

export type BoardType = CellType[][]
