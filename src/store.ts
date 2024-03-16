import { create } from 'zustand';
import { BoardType, CellCoordinatesArrayType, ShapeEnum } from './types';
import { makeEmptyBoard } from './utils/makeEmptyBoard';
import { makePriorBoard } from './utils/makePriorBoard';
import { makeFirstBoard } from './utils/makeFirstBoard';
import { makeShape } from './utils/makeShape';

interface GameState {
  board: BoardType;
  cycleCount: number;
  liveCellsHistory: CellCoordinatesArrayType[];
  zoomLevel: number,
  toggleAlive: (rowIndex: number, columnIndex: number, isPanning: boolean) => void;
  incrementCycleCount: () => void;
  addToLiveCellsHistory: (currentLiveCells: CellCoordinatesArrayType) => void;
  stepBack: () => void,
  returnToStart: () => void;
  makeShape: (shape: ShapeEnum) => void;
  changeZoomLevel: (zoomLevel: number) => void;
  reset: () => void;
}

const handleToggleAlive = (
  rowIndex: number,
  columnIndex: number,
  board: BoardType,
  isPanning: boolean,
) => {
  if (!isPanning) {
    const newBoard = board.map(innerArray => [...innerArray]);
    newBoard[rowIndex][columnIndex].isAlive =
      !board[rowIndex][columnIndex].isAlive;
    return newBoard;
  }
  return board;  
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

const handleMakeShape = (shape: ShapeEnum) => {
  return makeShape(shape)
}

export const useStore = create<GameState>(set => ({
  board: makeEmptyBoard(),
  cycleCount: 0,
  liveCellsHistory: [],
  zoomLevel: 26,
  toggleAlive: (rowIndex: number, columnIndex: number, isPanning: boolean) => set(state => ({
    board: handleToggleAlive(rowIndex, columnIndex, state.board, isPanning),
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
  returnToStart: () => set(state => ({ board: handleReturnToStart(state.liveCellsHistory), cycleCount: 0, liveCellsHistory: []})),
  makeShape: (shape: ShapeEnum) => set({ board: handleMakeShape(shape), cycleCount: 0, liveCellsHistory: [] }),
  changeZoomLevel: (zoomLevel: number) => set({ zoomLevel: zoomLevel }),
  reset: () => set({ board: handleReset(), cycleCount: 0, liveCellsHistory: [] }),
}));
