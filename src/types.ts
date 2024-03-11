export interface CellType {
  isAlive: boolean;
}

export type BoardType = CellType[][];

export interface CellCoordinatesType {
  rowIndex: number;
  columnIndex: number;
}

export type CellCoordinatesArrayType = CellCoordinatesType[];
