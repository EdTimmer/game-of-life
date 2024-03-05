import { BoardType } from '../../types';
import Cell from '../Cell/Cell';
import { BoardContainer, RowContainer } from './Board.css';

interface Props {
  board: BoardType;
}

function Board({ board }: Props) {
  console.log('board :>> ', board);
  return (
    <BoardContainer className='board'>
      {board.map((row, rowIndex) => (
        <RowContainer className='row' key={`${rowIndex}`}>
          {row.map(({ isAlive, adjacentAliveCount }, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isAlive={isAlive}
              adjacentAliveCount={adjacentAliveCount}
              rowIndex={rowIndex}
              columnIndex={colIndex}
            />
          ))}
        </RowContainer>
      ))}    
    </BoardContainer>
  );
}

export default Board;
