import { create } from 'zustand';

import { BoardType, CellType } from './types';
import { getAdjacentStatus } from './utils/getAdjacentStatus';

interface GameState {
  board: BoardType,
  toggleAlive: (rowIndex: number, columnIndex: number) => void,
  runOneCycle: () => any,
  reset: () => any,
}

const defaultCell: CellType = {
  isAlive: false,
  adjacentAliveCount: 0,
};

const emptyBoard = Array(40)
  .fill(null)
  .map(() => Array(40).fill(null)
    .map(() => ({ ...defaultCell })))

const handleToggleAlive = (rowIndex: number, columnIndex: number, board: BoardType) => {
  const newBoard = board.map(innerArray => [...innerArray])
  newBoard[rowIndex][columnIndex].isAlive = !board[rowIndex][columnIndex].isAlive
  return newBoard
}

const handleRunOneCycle = (board: BoardType, toggleAlive: (rowIndex: number, columnIndex: number) => void) => {
  let arrayOfChangedCells: { rowIndex: number, columnIndex: number }[] | [] = []
  const newBoard = board.map((row, rowIndex) => {
    return row.map((cell, columnIndex) => {
      const aliveAdjacentCount = getAdjacentStatus(rowIndex, columnIndex, board)
      // should be dead from underpopulation
      if (cell.isAlive && aliveAdjacentCount < 2) {
        arrayOfChangedCells = [...arrayOfChangedCells, { rowIndex, columnIndex }]
        // should be dead from overpopulation
      } else if (cell.isAlive && aliveAdjacentCount > 3) {
        arrayOfChangedCells = [...arrayOfChangedCells, { rowIndex, columnIndex }]
        // birth
      } else if (!cell.isAlive && aliveAdjacentCount === 3) {
        arrayOfChangedCells = [...arrayOfChangedCells, { rowIndex, columnIndex }]
      }
      return cell
    })
  })
  arrayOfChangedCells.forEach(cell => {
    toggleAlive(cell.rowIndex, cell.columnIndex)
  })
  return newBoard;
}

const handleReset = () => {
  const newEmptyBoard = Array(40)
    .fill(null)
    .map(() => Array(40).fill(null)
      .map(() => ({ ...defaultCell })))
  return newEmptyBoard
}


export const useStore = create<GameState>((set) => ({
  board: emptyBoard,
  toggleAlive: (rowIndex: number, columnIndex: number) => set(state => ({ board: handleToggleAlive(rowIndex, columnIndex, state.board) })),
  runOneCycle: () => set(state => ({ board: handleRunOneCycle(state.board, state.toggleAlive) })),
  reset: () => set({ board: handleReset() })
  
}))