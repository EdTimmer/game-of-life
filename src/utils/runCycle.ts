import { BoardType, CellCoordinatesArrayType } from "../types"
import { getLiveNeighborsCount } from "./getLiveNeighborsCount"

export const runCycle = (board: BoardType, toggleAlive: (rowIndex: number, columnIndex: number) => void, incrementCycleCount: () => void) => {
  let arrayOfChangedCells: CellCoordinatesArrayType = []
  board.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const aliveNeighborsCount = getLiveNeighborsCount(rowIndex, columnIndex, board)
      if (cell.isAlive && aliveNeighborsCount < 2) {
        // should be dead from underpopulation
        arrayOfChangedCells = [...arrayOfChangedCells, { rowIndex, columnIndex }]
      } else if (cell.isAlive && aliveNeighborsCount > 3) {
        // should be dead from overpopulation
        arrayOfChangedCells = [...arrayOfChangedCells, { rowIndex, columnIndex }]
      } else if (!cell.isAlive && aliveNeighborsCount === 3) {
        // should be born if next to 3 live cells
        arrayOfChangedCells = [...arrayOfChangedCells, { rowIndex, columnIndex }]
      }
    })
  })
  arrayOfChangedCells.forEach(cell => {
    toggleAlive(cell.rowIndex, cell.columnIndex)
  })
  incrementCycleCount()
}
