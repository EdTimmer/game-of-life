// import { BoardType } from "../types";
// import { getAdjacentStatus } from "./getAdjacentStatus";
// import { useStore } from '../store'

// export const runOneCycle = (board: BoardType) => {
//   const toggleCell = useStore(state => state.toggleAlive)

//   board.forEach((row, rowIndex) => {
//     row.forEach((cell, columnIndex) => {
//       const aliveAdjacentCount = getAdjacentStatus(rowIndex, columnIndex, board)
      
//       //should be dead from underpopulation
//       if (cell.isAlive && aliveAdjacentCount < 2) {
//         toggleCell(rowIndex, columnIndex)
//       }

//     })
//   })
//   return undefined
// }