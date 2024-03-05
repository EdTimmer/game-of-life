import { CellContainer } from './Cell.css';
import { useStore } from '../../store'

interface CellProps {
  rowIndex: number,
  columnIndex: number,
  isAlive: boolean,
  adjacentAliveCount: number,
}

function Cell({ rowIndex, columnIndex, isAlive }: CellProps) {
  const toggleCell = useStore(state => state.toggleAlive)
  return <CellContainer $isAlive={isAlive} onClick={() => toggleCell(rowIndex, columnIndex)} />;
}

export default Cell;
