// import { MutableRefObject } from 'react';
// import { BoardType, CellCoordinatesArrayType } from '../types';
// import { runCycle } from './runCycle';

// export const runPlay = (
//   shouldStop: MutableRefObject<boolean>,
//   delay: MutableRefObject<number>,
//   board: BoardType,
//   toggleAlive: (
//     rowIndex: number,
//     columnIndex: number,
//     isPanning: boolean,
//   ) => void,
//   incrementCycleCount: () => void,
//   addToLiveCellsHistory: (currentAliveCells: CellCoordinatesArrayType) => void,
//   isPanning: boolean,
// ): void => {
//   if (shouldStop.current) {
//     return; // Stop the recursion
//   }
//   runCycle(
//     board,
//     toggleAlive,
//     incrementCycleCount,
//     addToLiveCellsHistory,
//     isPanning,
//   );

//   const convertDelay = (delay: number) => {
//     if (delay < 1 || delay > 20) {
//       throw new Error('Group A number must be between 1 and 20.');
//     }

//     // Calculate the step size based on the range of values in milliseconds
//     const stepSize = 1900 / 19;

//     // Calculate the corresponding milliseconds number using the inverse relationship
//     // The formula adjusts the stepSize according to the position of slider value in its range
//     let msSpeed = 2000 - stepSize * (delay - 1);
//     // console.log('msSpeed :>> ', msSpeed);
//     return Math.round(msSpeed);
//   };

//   // Schedule the next execution only if the condition is not yet met
//   if (typeof delay.current === 'number') {
//     setTimeout(
//       () =>
//         runPlay(
//           shouldStop,
//           delay,
//           board,
//           toggleAlive,
//           incrementCycleCount,
//           addToLiveCellsHistory,
//           isPanning,
//         ),
//       convertDelay(delay.current),
//     );
//   }
// };
import { MutableRefObject } from 'react';
import { BoardType, CellCoordinatesArrayType } from '../types';
import { runCycle } from './runCycle';

// Define a delay function that returns a Promise, allowing us to use async/await for timing
const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const convertDelay = (delay: number): number => {
  if (delay < 1 || delay > 20) {
    throw new Error('Delay must be between 1 and 20.');
  }

  // Calculate the delay in milliseconds based on the input
  const stepSize = 1900 / 19;
  let msSpeed = 2000 - stepSize * (delay - 1);
  return Math.round(msSpeed);
};

export const runPlay = async (
  shouldStop: MutableRefObject<boolean>,
  delayRef: MutableRefObject<number>,
  board: BoardType,
  toggleAlive: (rowIndex: number, columnIndex: number, isPanning: boolean) => void,
  incrementCycleCount: () => void,
  addToLiveCellsHistory: (currentAliveCells: CellCoordinatesArrayType) => void,
  isPanning: boolean,
): Promise<void> => {
  // Using an async IIFE to handle the loop
  (async () => {
    while (!shouldStop.current) {
      runCycle(board, toggleAlive, incrementCycleCount, addToLiveCellsHistory, isPanning);

      if (typeof delayRef.current === 'number') {
        // Await the delay, converted from the current delay value
        await delay(convertDelay(delayRef.current));
      } else {
        break; // If delayRef.current is not a number, exit the loop
      }
    }
  })();
};
