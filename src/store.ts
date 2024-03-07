import { create } from 'zustand';
import { BoardType } from './types';
import { makeEmptyBoard } from './utils/makeEmptyBoard';

interface GameState {
  board: BoardType,
  cycleCount: number,
  toggleAlive: (rowIndex: number, columnIndex: number) => void,
  incrementCycleCount: () => void,
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
  cycleCount: 0,
  toggleAlive: (rowIndex: number, columnIndex: number) => set(state => ({ board: handleToggleAlive(rowIndex, columnIndex, state.board) })),
  incrementCycleCount: () => set(state => ({ cycleCount: state.cycleCount + 1})),
  reset: () => set({ board: handleReset(), cycleCount: 0 }),
}))