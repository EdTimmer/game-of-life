import { create } from 'zustand';
import { BoardType } from './types';
import { makeEmptyBoard } from './utils/makeEmptyBoard';

interface GameState {
  board: BoardType,
  toggleAlive: (rowIndex: number, columnIndex: number) => void,
  reset: () => void,
}

const handleToggleAlive = (rowIndex: number, columnIndex: number, board: BoardType) => {
  const newBoard = board.map(innerArray => [...innerArray])
  newBoard[rowIndex][columnIndex].isAlive = !board[rowIndex][columnIndex].isAlive
  return newBoard
}

const handleReset = () => {
  const newBoard = makeEmptyBoard()
  return newBoard
}

export const useStore = create<GameState>((set) => ({
  board: makeEmptyBoard(),
  toggleAlive: (rowIndex: number, columnIndex: number) => set(state => ({ board: handleToggleAlive(rowIndex, columnIndex, state.board) })),
  reset: () => set({ board: handleReset() }),
}))