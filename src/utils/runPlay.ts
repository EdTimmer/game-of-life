import { MutableRefObject } from "react";
import { BoardType } from "../types";
import { runCycle } from "./runCycle";

export const runPlay = (shouldStop: MutableRefObject<boolean>, delay: number, board: BoardType, toggleAlive: (rowIndex: number, columnIndex: number) => void, incrementCycleCount: () => void): void => {
  if (shouldStop.current) {
    return; // Stop the recursion
  }
  runCycle(board, toggleAlive, incrementCycleCount)

  // Schedule the next execution only if the condition is not yet met
  setTimeout(() => runPlay(shouldStop, delay, board, toggleAlive, incrementCycleCount), delay);
}
