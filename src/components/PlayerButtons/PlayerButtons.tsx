import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useStore } from '../../store';
import { runCycle } from '../../utils/runCycle';
import { runPlay } from '../../utils/runPlay';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ClearIcon from '@mui/icons-material/Clear';
import FastRewindIcon from '@mui/icons-material/FastRewind';

interface PlayerButtonsProps {
  playSpeedRef: React.MutableRefObject<number>;
  isPanning: boolean;
  isModalOpen: boolean;
}

const PlayerButtons = ({ playSpeedRef, isPanning, isModalOpen }: PlayerButtonsProps) => {
  const board = useStore(state => state.board);
  const cycleCount = useStore(state => state.cycleCount);
  const incrementCycleCount = useStore(state => state.incrementCycleCount);
  const reset = useStore(state => state.reset);
  const toggleAlive = useStore(state => state.toggleAlive);
  const addToLiveCellsHistory = useStore(state => state.addToLiveCellsHistory);
  const stepBack = useStore(state => state.stepBack);
  const returnToStart = useStore(state => state.returnToStart);
  const liveCellsHistory = useStore(state => state.liveCellsHistory);

  const shouldStopRef = useRef<boolean>(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const stopPlay = () => {
    if (isPlaying) {
      shouldStopRef.current = true;
      setIsPlaying(false);
    }
  };
  // stop play when modal is open
  useEffect(() => {
    if (isModalOpen) {
      stopPlay();
    }
  }, [isModalOpen]);

  const handleReturnToStart = () => {
    stopPlay();
    returnToStart();
  };

  const handleStepBack = () => {
    stopPlay();
    stepBack();
  };

  const handleStartPlay = () => {
    if (!isPlaying) {
      shouldStopRef.current = false; // ref is set to false when starting
      runPlay(
        shouldStopRef,
        playSpeedRef,
        board,
        toggleAlive,
        incrementCycleCount,
        addToLiveCellsHistory,
        isPanning,
      );
      setIsPlaying(true);
    } else {
      stopPlay();
    }
  };

  const handleOneStep = () => {
    console.log('liveCellsHistory :>> ', liveCellsHistory);
    stopPlay();
    runCycle(
      board,
      toggleAlive,
      incrementCycleCount,
      addToLiveCellsHistory,
      isPanning,
    );
  };

  const handleReset = () => {
    stopPlay();
    reset();
  };

  return (
    <ButtonGroup
      variant="outlined"
      size="large"
      color="secondary"
      aria-label="player button group"
      disabled={isPanning}
    >
      <Button
        size="large"
        aria-label="rewind"
        onClick={handleReturnToStart}
        disabled={cycleCount === 0}
      >
        <FastRewindIcon fontSize="large" />
      </Button>

      <Button
        size="large"
        aria-label="back"
        onClick={handleStepBack}
        disabled={cycleCount === 0}
      >
        <UndoIcon fontSize="large" />
      </Button>

      <Button size="large" aria-label="play pause" onClick={handleStartPlay}>
        {isPlaying ? (
          <PauseIcon fontSize="large" />
        ) : (
          <PlayArrowIcon fontSize="large" />
        )}
      </Button>

      <Button size="large" aria-label="forward" onClick={handleOneStep}>
        <RedoIcon fontSize="large" />
      </Button>

      <Button size="large" aria-label="restart" onClick={handleReset}>
        <ClearIcon fontSize="large" />
      </Button>
    </ButtonGroup>
  );
};

export default PlayerButtons;
