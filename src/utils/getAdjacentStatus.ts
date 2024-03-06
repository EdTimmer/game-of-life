import { BoardType } from "../types"

export const getAdjacentStatus = (rowIndex: number, columnIndex: number, board: BoardType) => {

  let adjacentAliveCount = 0

  const topLeft = { rowIndex: rowIndex - 1, columnIndex: columnIndex - 1 }
  const topCenter = { rowIndex: rowIndex - 1, columnIndex: columnIndex }
  const topRight = { rowIndex: rowIndex - 1, columnIndex: columnIndex + 1 }
  const centerLeft = { rowIndex: rowIndex, columnIndex: columnIndex - 1 }
  const centerRight = { rowIndex: rowIndex, columnIndex: columnIndex + 1 }
  const bottomLeft = { rowIndex: rowIndex + 1, columnIndex: columnIndex - 1 }
  const bottomCenter = { rowIndex: rowIndex + 1, columnIndex: columnIndex }
  const bottomRight = { rowIndex: rowIndex + 1, columnIndex: columnIndex + 1 }

  const adjacentCells = [topLeft, topCenter, topRight, centerLeft, centerRight, bottomLeft, bottomCenter, bottomRight]

  const filteredAdjacentCells = adjacentCells.filter(cell => {
    return cell.rowIndex > -1 && cell.rowIndex < 20 && cell.columnIndex > -1 && cell.columnIndex < 20
  })

  filteredAdjacentCells.forEach(cell => {
    if (board[cell.rowIndex][cell.columnIndex].isAlive) {
      adjacentAliveCount++
    }
  })
  // console.log('adjacentAliveCount :>> ', adjacentAliveCount);
  return adjacentAliveCount
}