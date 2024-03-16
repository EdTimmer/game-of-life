export interface CellType {
  isAlive: boolean;
}

export type BoardType = CellType[][];

export interface CellCoordinatesType {
  rowIndex: number;
  columnIndex: number;
}

export type CellCoordinatesArrayType = CellCoordinatesType[];

export enum ShapeEnum {
  GLIDER = 'GLIDER',
  PULSAR_PRECURSOR = 'PULSAR_PRECURSOR',
  PULSAR = 'PULSAR',
  GLIDER_GUN = 'GLIDER_GUN',
  RANDOM = 'RANDOM',
}
