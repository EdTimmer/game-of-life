import { create } from 'zustand';

import { AliveCellsArrayType, BoardType, CellType } from './types';

interface GameState {
  board: BoardType,
  aliveCells: AliveCellsArrayType,
  toggleAlive: (rowIndex: number, columnIndex: number) => void,
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

export const useStore = create<GameState>((set) => ({
  board: emptyBoard,
  aliveCells: [],
  toggleAlive: (rowIndex: number, columnIndex: number) => set(state => ({ board: handleToggleAlive(rowIndex, columnIndex, state.board, state.aliveCells), aliveCells: handleUpdateAliveCells(rowIndex, columnIndex, state.aliveCells, state.board) })),
}))