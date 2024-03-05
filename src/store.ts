import { create } from 'zustand';

import { BoardType, CellType } from './types';

interface GameState {
  board: BoardType,
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

const hangleToggleAlive = (rowIndex: number, columnIndex: number, board: BoardType) => {
  const newBoard = board.map(innerArray => [...innerArray])
  newBoard[rowIndex][columnIndex].isAlive = !board[rowIndex][columnIndex].isAlive
  return newBoard
}

export const useStore = create<GameState>((set) => ({
  board: emptyBoard,
  toggleAlive: (rowIndex: number, columnIndex: number) => set(state => ({ board: hangleToggleAlive(rowIndex, columnIndex, state.board) }))
}))