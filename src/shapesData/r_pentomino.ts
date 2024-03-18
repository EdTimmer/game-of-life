import { CellCoordinatesArrayType } from "../types";

export const rPentomino: CellCoordinatesArrayType = [
  {
      rowIndex: 59,
      columnIndex: 59
  },
  {
      rowIndex: 59,
      columnIndex: 60
  },
  {
      rowIndex: 60,
      columnIndex: 58
  },
  {
      rowIndex: 60,
      columnIndex: 59
  },
  {
      rowIndex: 61,
      columnIndex: 59
  }
]

export const rPentominoDescription = "The R-pentomino is a methuselah that was found by John Conway in 1969. It is by far the most active polyomino with fewer than six cells; all of the others stabilize in at most 10 generations, but the R-pentomino does not do so until generation 1103, by which time it has a population of 116. The glider it releases in generation 69, noticed by Richard K. Guy, was the first glider ever observed. It is the most common methuselah to occur naturally; there are more common sequences, but they are not methuselahs."