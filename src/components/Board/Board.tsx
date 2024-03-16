import { BoardType } from '../../types';
import Cell from '../Cell/Cell';
import { BoardContainer, RowContainer, ViewportContainer } from './Board.css';

interface Props {
  board: BoardType;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp: () => void;
  translateX: number;
  translateY: number;
  isPanning: boolean;
}

function Board({
  board,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  translateX,
  translateY,
  isPanning,
}: Props) {
  return (
    <ViewportContainer
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      $isPanning={isPanning}
    >
      <BoardContainer $translateX={translateX} $translateY={translateY}>
        {board.map((row, rowIndex) => (
          <RowContainer key={`${rowIndex}`}>
            {row.map(({ isAlive }, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                isAlive={isAlive}
                rowIndex={rowIndex}
                columnIndex={colIndex}
                isPanning={isPanning}
              />
            ))}
          </RowContainer>
        ))}
      </BoardContainer>
    </ViewportContainer>
  );
}

export default Board;
