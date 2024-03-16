import { CellContainer } from './Cell.css';
import { useStore } from '../../store';

interface CellProps {
  rowIndex: number;
  columnIndex: number;
  isAlive: boolean;
  isPanning: boolean;
}

const Cell = ({ rowIndex, columnIndex, isAlive, isPanning }: CellProps) => {
  const toggleCell = useStore(state => state.toggleAlive);
  const zoomLevel = useStore(state => state.zoomLevel);
  return (
    <CellContainer
      $zoomLevel={zoomLevel}
      $isAlive={isAlive}
      onClick={() => toggleCell(rowIndex, columnIndex, isPanning)}
    />
  );
};

export default Cell;
