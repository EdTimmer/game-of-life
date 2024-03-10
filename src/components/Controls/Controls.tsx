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

const Controls = () => {
  const board = useStore(state => state.board);
  const cycleCount = useStore(state => state.cycleCount);
  const incrementCycleCount = useStore(state => state.incrementCycleCount);
  const reset = useStore(state => state.reset);
  const toggleAlive = useStore(state => state.toggleAlive);
  const addToLiveCellsHistory = useStore(state => state.addToLiveCellsHistory);
  const removeFromLiveCellsHistory = useStore(state => state.removeFromLiveCellsHistory)

  const shouldStopRef = useRef<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const startRecursivePlay = () => {
    if (!isPlaying) {
      shouldStopRef.current = false; // ref is set to false when starting
      runPlay(shouldStopRef, 250, board, toggleAlive, incrementCycleCount, addToLiveCellsHistory);
      setIsPlaying(true);
    } else {
      stopPlay();
    }
  };

  const stopPlay = () => {
    shouldStopRef.current = true;
    setIsPlaying(false);
  };

  const handleReset = () => {
    stopPlay();
    reset();
  };

  const handleGoBack = () => {
    removeFromLiveCellsHistory()
    // givePriorBoard()
  }

  // console.log('liveCellsHistory :>> ', liveCellsHistory);

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
            <Button size="large" aria-label="back" onClick={handleGoBack} disabled={cycleCount === 0}>
              <UndoIcon />
            </Button>

            <Button
              size="large"
              aria-label="play pause"
              onClick={startRecursivePlay}
            >
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </Button>

            <Button
              size="large"
              aria-label="forward"
              onClick={() => {
                runCycle(
                  board,
                  toggleAlive,
                  incrementCycleCount,
                  addToLiveCellsHistory,
                );
              }}
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
