import { MutableRefObject } from 'react';
import { BoardType, CellCoordinatesArrayType } from '../types';
import { runCycle } from './runCycle';

export const runPlay = (
  shouldStop: MutableRefObject<boolean>,
  delay: MutableRefObject<number>,
  board: BoardType,
  toggleAlive: (rowIndex: number, columnIndex: number) => void,
  incrementCycleCount: () => void,
  addToLiveCellsHistory: (currentAliveCells: CellCoordinatesArrayType) => void,
): void => {
  if (shouldStop.current) {
    return; // Stop the recursion
  }
  runCycle(board, toggleAlive, incrementCycleCount, addToLiveCellsHistory);
  // console.log('delay :>> ', delay);

  const convertDelay = (delay: number) => {
    if (delay < 1 || delay > 20) {
        throw new Error('Group A number must be between 1 and 20.');
    }

    // Calculate the step size based on the range of values in Group B
    const stepSize = 1900 / 19;

    // Calculate the corresponding Group B number using the inverse relationship
    // The formula adjusts the stepSize according to the position of numberA in its range
    let msSpeed = 2000 - stepSize * (delay - 1);
    // console.log('msSpeed :>> ', msSpeed);
    return Math.round(msSpeed);
}

  // Schedule the next execution only if the condition is not yet met
  if (typeof delay.current === "number") {
    setTimeout(
      () => runPlay(shouldStop, delay, board, toggleAlive, incrementCycleCount, addToLiveCellsHistory),
      convertDelay(delay.current),
    );
  }
};
