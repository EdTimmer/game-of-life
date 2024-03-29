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
  R_PENTOMINO = 'R_PENTOMINO',
  WHY_NOT = 'WHY_NOT',
  LIGHTWEIGHT_SPACESHIP = 'LIGHTWEIGHT_SPACESHIP',
  PULSAR = 'PULSAR',
  GLIDER_GUN = 'GLIDER_GUN',
  RANDOM = 'RANDOM',
}
