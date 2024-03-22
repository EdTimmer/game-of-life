import { BoardType } from '../../types';
import Cell from '../Cell/Cell';
import { BoardContainer, RowContainer, ViewportContainer } from './Board.css';

interface Props {
  board: BoardType;
  // onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  // onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  // onMouseUp: () => void;
  // translateX: number;
  // translateY: number;
  // isPanning: boolean;
}

function Board({
  board,
  // onMouseDown,
  // onMouseMove,
  // onMouseUp,
  // translateX,
  // translateY,
  // isPanning,
}: Props) {
  const cellSize = 1.1; // Slightly more than 1 to have gaps between cells
  const halfBoardWidth = 120 / 2 * cellSize - cellSize / 2;
  const halfBoardHeight = 120 / 2 * cellSize - cellSize / 2;
  return (
    <>
      {
        board.map((row, rowIndex) => (
            row.map(({ isAlive }, colIndex) => (
              <>
                <Cell
                  key={`${rowIndex}-${colIndex}`}
                  isAlive={isAlive}
                  rowIndex={rowIndex}
                  columnIndex={colIndex}
                  // isPanning={isPanning}
                  position={[(colIndex * cellSize) - halfBoardWidth,
                    (rowIndex * -cellSize) + halfBoardHeight,
                    0,]}
                />
              </>
            ))

        ))
      }
    </>
  )  
}

export default Board;
