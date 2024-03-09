import { BoardType } from '../../types';
import Cell from '../Cell/Cell';
import { BoardContainer, RowContainer, ViewportContainer } from './Board.css';

interface Props {
  board: BoardType;
}

function Board({ board }: Props) {
  return (
    <ViewportContainer>
      <BoardContainer className='board'>
        {board.map((row, rowIndex) => (
          <RowContainer className='row' key={`${rowIndex}`}>
            {row.map(({ isAlive }, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                isAlive={isAlive}
                rowIndex={rowIndex}
                columnIndex={colIndex}
              />
            ))}
          </RowContainer>
        ))}
      </BoardContainer>
    </ViewportContainer>
  );
}

export default Board;
