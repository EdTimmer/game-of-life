export interface CellType {
  isAlive: boolean;
  adjacentAliveCount: number;
}

export interface AliveCellType {
  rowIndex: number,
  columnIndex: number,
}

export type AliveCellsArrayType = AliveCellType[] | [] 

export type BoardType = CellType[][]
