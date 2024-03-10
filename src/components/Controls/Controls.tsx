import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { theme } from '../../styles/theme';
import { ControlsContainer, ControlsText, RowSection } from './Controls.css';
import { useStore } from '../../store';
import { runCycle } from '../../utils/runCycle';
import { runPlay } from '../../utils/runPlay';
import { ThemeProvider } from '@mui/material/styles';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import NumbersIcon from '@mui/icons-material/Numbers';
import FastRewindIcon from '@mui/icons-material/FastRewind';

const Controls = () => {
  const board = useStore(state => state.board);
  const cycleCount = useStore(state => state.cycleCount);
  const incrementCycleCount = useStore(state => state.incrementCycleCount);
  const reset = useStore(state => state.reset);
  const toggleAlive = useStore(state => state.toggleAlive);
  const addToLiveCellsHistory = useStore(state => state.addToLiveCellsHistory);
  const stepBack = useStore(state => state.stepBack)
  const returnToStart = useStore(state => state.returnToStart)

  const shouldStopRef = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartPlay = () => {
    if (!isPlaying) {
      shouldStopRef.current = false; // ref is set to false when starting
      runPlay(shouldStopRef, 250, board, toggleAlive, incrementCycleCount, addToLiveCellsHistory);
      setIsPlaying(true);
    } else {
      stopPlay();
    }
  };

  const stopPlay = () => {
    if (isPlaying) {
      shouldStopRef.current = true;
      setIsPlaying(false);
    }
  };

  const handleReset = () => {
    stopPlay()
    reset();
  };

  const handleStepBack = () => {
    stopPlay()
    stepBack()
  }

  const handleReturnToStart = () => {
    stopPlay()
    returnToStart()
  }

  const handleOneStep = () => {
    stopPlay()
    runCycle(
      board,
      toggleAlive,
      incrementCycleCount,
      addToLiveCellsHistory,
    );
  }

  return (
    <ControlsContainer>
      <ThemeProvider theme={theme}>
        <RowSection>
          <ButtonGroup
            variant="contained"
            size="large"
            color="secondary"
            aria-label="Basic button group"
          >
            <Button size="large" aria-label="rewind" onClick={handleReturnToStart} disabled={cycleCount === 0}>
              <FastRewindIcon />
            </Button>

            <Button size="large" aria-label="back" onClick={handleStepBack} disabled={cycleCount === 0}>
              <UndoIcon />
            </Button>

            <Button
              size="large"
              aria-label="play pause"
              onClick={handleStartPlay}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </Button>

            <Button
              size="large"
              aria-label="forward"
              onClick={handleOneStep}
            >
              <RedoIcon />
            </Button>

            <Button size="large" aria-label="restart" onClick={handleReset}>
              <SettingsBackupRestoreIcon />
            </Button>
          </ButtonGroup>
        </RowSection>

        <RowSection>
          <NumbersIcon />
          <ControlsText>{cycleCount}</ControlsText>
        </RowSection>
      </ThemeProvider>
    </ControlsContainer>
  );
};

export default Controls;
