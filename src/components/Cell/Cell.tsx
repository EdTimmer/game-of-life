import { CellContainer } from './Cell.css';
import { useStore } from '../../store';

interface CellProps {
  rowIndex: number;
  columnIndex: number;
  isAlive: boolean;
}

function Cell({ rowIndex, columnIndex, isAlive }: CellProps) {
  const toggleCell = useStore(state => state.toggleAlive);
  const zoomLevel = useStore(state => state.zoomLevel);
  return (
    <CellContainer
      $zoomLevel={zoomLevel}
      $isAlive={isAlive}
      onClick={() => toggleCell(rowIndex, columnIndex)}
    />
  );
}

export default Cell;
