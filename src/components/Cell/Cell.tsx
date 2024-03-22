import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { BufferGeometry, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three';

// import { CellContainer } from './Cell.css';
import { useStore } from '../../store';

interface CellProps {
  rowIndex: number;
  columnIndex: number;
  isAlive: boolean;
  isPanning?: boolean;
  position: [number, number, number];
}

const Cell = ({ position, rowIndex, columnIndex, isAlive, isPanning = false }: CellProps) => {
  const toggleCell = useStore(state => state.toggleAlive);
  const zoomLevel = useStore(state => state.zoomLevel);
  // return (
  //   <CellContainer
  //     $zoomLevel={zoomLevel}
  //     $isAlive={isAlive}
  //     onClick={() => toggleCell(rowIndex, columnIndex, isPanning)}
  //   />
  // );
  const mesh = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null);

  return (
    <mesh ref={mesh} position={position} onClick={() => toggleCell(rowIndex, columnIndex, isPanning)}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color={isAlive ? 'rgb(252, 163, 17)' : 'rgb(20, 33, 61)'} toneMapped={false} />
    </mesh>
  );
};

export default Cell;
