export interface CellType {
  isAlive: boolean;
  // aliveNeighborsCount: number;
}

export type BoardType = CellType[][];

export interface CellCoordinatesType {
  rowIndex: number;
  columnIndex: number;
}

export type CellCoordinatesArrayType = CellCoordinatesType[] | [];
