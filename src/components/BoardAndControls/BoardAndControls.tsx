import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useStore } from '../../store';
import Board from '../Board/Board';
import Controls from '../Controls/Controls';
import { BoardAndControlsContainer, CanvasContainer } from './BoardAndControls.css';

const BoardAndControls = () => {
  const board = useStore(state => state.board);

  //panning
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  // CONSIDER MOVING THIS TO THE STORE
  const [isPanning, setIsPanning] = useState(false);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isPanning) {
      setIsDragging(true);
      setStartX(e.clientX - translateX);
      setStartY(e.clientY - translateY);
    }
    return;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.clientX - startX;
    const y = e.clientY - startY;
    setTranslateX(x);
    setTranslateY(y);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onCenter = () => {
    setTranslateX(0);
    setTranslateY(0);
  };

  return (
    <BoardAndControlsContainer>
      {/* <Board
        board={board}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        translateX={translateX}
        translateY={translateY}
        isPanning={isPanning}
      /> */}
      <CanvasContainer>
        <Canvas linear={false} camera={{ position: [0, 0, 100], fov: 75 }} style={{ backgroundColor: 'black', width: '100%', height: '80vh' }}>
          <ambientLight intensity={0.5} />
          <Board board={board} 
            // onMouseDown={onMouseDown}
            // onMouseMove={onMouseMove}
            // onMouseUp={onMouseUp}
            // translateX={translateX}
            // translateY={translateY}
            // isPanning={isPanning} 
          />
        </Canvas>
      </CanvasContainer>
      <Controls
        isPanning={isPanning}
        setIsPanning={setIsPanning}
        onCenter={onCenter}
      />
    </BoardAndControlsContainer>
  );
};

export default BoardAndControls;
