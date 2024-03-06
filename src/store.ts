import { create } from 'zustand';

import { AliveCellsArrayType, BoardType, CellType } from './types';
import { getAdjacentStatus } from './utils/getAdjacentStatus';

interface GameState {
  board: BoardType,
  aliveCells: AliveCellsArrayType,
  toggleAlive: (rowIndex: number, columnIndex: number) => void,
  runOneCycle: () => any,
}

const defaultCell: CellType = {
  isAlive: false,
  adjacentAliveCount: 0,
};

const emptyBoard = Array(20)
  .fill(null)
  .map(() => Array(20).fill(null)
    .map(() => ({ ...defaultCell })))

const handleUpdateAliveCells = (rowIndex: number, columnIndex: number, aliveCells: AliveCellsArrayType, board: BoardType) => {
  const cellIsAlive = board[rowIndex][columnIndex].isAlive
  let updatedAliveCells
  if (cellIsAlive) {
    updatedAliveCells = [...aliveCells, { rowIndex, columnIndex }]
  } else {
    updatedAliveCells = aliveCells.filter(cell => {
      const currentRowIndex = cell.rowIndex
      const currentColumnIndex = cell.columnIndex
      return currentRowIndex !== rowIndex || currentColumnIndex !== columnIndex
    })
  }
  return updatedAliveCells
}

const handleToggleAlive = (rowIndex: number, columnIndex: number, board: BoardType, aliveCells: AliveCellsArrayType) => {
  const newBoard = board.map(innerArray => [...innerArray])
  newBoard[rowIndex][columnIndex].isAlive = !board[rowIndex][columnIndex].isAlive
  handleUpdateAliveCells(rowIndex, columnIndex, aliveCells, board)

  return newBoard
}

const handleRunOneCycle = (board: BoardType, toggleAlive: (rowIndex: number, columnIndex: number) => void) => {
  let arrayOfChangedCells: { rowIndex: number, columnIndex: number}[] | [] = []
  const newBoard = board.map((row, rowIndex) => {
    return row.map((cell, columnIndex) => {
      const aliveAdjacentCount = getAdjacentStatus(rowIndex, columnIndex, board)
      // should be dead from underpopulation
      if (cell.isAlive && aliveAdjacentCount < 2) {
        arrayOfChangedCells = [...arrayOfChangedCells, {rowIndex, columnIndex}]
        // toggleAlive(rowIndex, columnIndex)
        // should be dead from overpopulation
      } else if (cell.isAlive && aliveAdjacentCount > 3) {
        arrayOfChangedCells = [...arrayOfChangedCells, {rowIndex, columnIndex}]
        // toggleAlive(rowIndex, columnIndex)
      // birth
      } else if (!cell.isAlive && aliveAdjacentCount === 3) {
        arrayOfChangedCells = [...arrayOfChangedCells, {rowIndex, columnIndex}]
        // toggleAlive(rowIndex, columnIndex)
      }
      

      return cell
    })
  })
  arrayOfChangedCells.forEach(cell => {
    toggleAlive(cell.rowIndex, cell.columnIndex)
  })
  return newBoard;
}

export const useStore = create<GameState>((set) => ({
  board: emptyBoard,
  aliveCells: [],
  toggleAlive: (rowIndex: number, columnIndex: number) => set(state => ({ board: handleToggleAlive(rowIndex, columnIndex, state.board, state.aliveCells), aliveCells: handleUpdateAliveCells(rowIndex, columnIndex, state.aliveCells, state.board) })),
  runOneCycle: () => set(state => ({ board: handleRunOneCycle(state.board, state.toggleAlive) }))
}))