import { create } from 'zustand';
import { BoardType, CellCoordinatesArrayType } from './types';
import { makeEmptyBoard } from './utils/makeEmptyBoard';
import { makePriorBoard } from './utils/makePriorBoard';
import { makeFirstBoard } from './utils/makeFirstBoard';

interface GameState {
  board: BoardType;
  cycleCount: number;
  liveCellsHistory: CellCoordinatesArrayType[] | [];
  toggleAlive: (rowIndex: number, columnIndex: number) => void;
  incrementCycleCount: () => void;
  addToLiveCellsHistory: (currentLiveCells: CellCoordinatesArrayType) => void;
  stepBack: () => void,
  returnToStart: () => void;
  reset: () => void;
}

const handleToggleAlive = (
  rowIndex: number,
  columnIndex: number,
  board: BoardType,
) => {
  const newBoard = board.map(innerArray => [...innerArray]);
  newBoard[rowIndex][columnIndex].isAlive =
    !board[rowIndex][columnIndex].isAlive;
  return newBoard;
};

const handleReset = () => {
  const newBoard = makeEmptyBoard();
  return newBoard;
};

const handleAddToLiveCellsHistory = (
  liveCellsHistory: CellCoordinatesArrayType[],
  currentLiveCells: CellCoordinatesArrayType,
) => {
  return [...liveCellsHistory, currentLiveCells];
};

const handleStepBack = (liveCellsHistory: CellCoordinatesArrayType[]) => {
  const priorLiveCellsHistory = [...liveCellsHistory]
  priorLiveCellsHistory.pop()
  return priorLiveCellsHistory
}

const goBackOneStep = (liveCellsHistory: CellCoordinatesArrayType[]) => {
  const priorBoard = makePriorBoard(liveCellsHistory)
  return priorBoard
}

const handleDecrementCount = (count: number) => {
  if (count > 0) {
    return count - 1
  } else {
    return 0
  }
}

const handleReturnToStart = (liveCellsHistory: CellCoordinatesArrayType[]) => {
  const firstBoard = makeFirstBoard(liveCellsHistory)
  return firstBoard
}

export const useStore = create<GameState>(set => ({
  board: makeEmptyBoard(),
  cycleCount: 0,
  liveCellsHistory: [],
  toggleAlive: (rowIndex: number, columnIndex: number) =>
    set(state => ({
      board: handleToggleAlive(rowIndex, columnIndex, state.board),
    })),
  incrementCycleCount: () =>
    set(state => ({ cycleCount: state.cycleCount + 1 })),
  addToLiveCellsHistory: (currentLiveCells: CellCoordinatesArrayType) =>
    set(state => ({
      liveCellsHistory: handleAddToLiveCellsHistory(
        state.liveCellsHistory,
        currentLiveCells,
      ),
    })),
  stepBack: () => set(state => ({ liveCellsHistory: handleStepBack(state.liveCellsHistory), board: goBackOneStep(state.liveCellsHistory), cycleCount: handleDecrementCount(state.cycleCount) })),
  // givePriorBoard: () => set(state => ({ board: goBackOneStep(state.liveCellsHistory)})),
  returnToStart: () => set(state => ({ board: handleReturnToStart(state.liveCellsHistory), cycleCount: 0 })),
  reset: () => set({ board: handleReset(), cycleCount: 0, liveCellsHistory: [] }),
}));
