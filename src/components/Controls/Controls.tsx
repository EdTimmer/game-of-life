import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { theme } from '../../styles/theme';
import {
  ControlsContainer,
  ControlsText,
  RowSection,
} from './Controls.css';
import { useStore } from '../../store';
import { runCycle } from '../../utils/runCycle';
import { runPlay } from '../../utils/runPlay';
import { ThemeProvider } from '@mui/material/styles';
import RedoIcon from '@mui/icons-material/Redo'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore'
import NumbersIcon from '@mui/icons-material/Numbers'

const Controls = () => {
  const board = useStore(state => state.board)
  const cycleCount = useStore(state => state.cycleCount)
  const incrementCycleCount = useStore(state => state.incrementCycleCount)
  const reset = useStore(state => state.reset)
  const toggleAlive = useStore(state => state.toggleAlive)

  const shouldStopRef = useRef<boolean>(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const startRecursivePlay = () => {
    if (!isPlaying) {
      shouldStopRef.current = false; // ref is set to false when starting
      runPlay(shouldStopRef, 250, board, toggleAlive, incrementCycleCount)
      setIsPlaying(true)
    } else {
      stopExecution()
      // setIsPlaying(false)
    }

  };

  const stopExecution = () => {
    shouldStopRef.current = true
    setIsPlaying(false)
  };

  const handleReset = () => {
    stopExecution()
    reset()
  }

  return (
    <ControlsContainer>

      <ThemeProvider theme={theme}>
        <RowSection>
          <ButtonGroup variant="contained" size="large" color="secondary" aria-label="Basic button group">
            <Button size="large" aria-label="one step" onClick={() => { runCycle(board, toggleAlive, incrementCycleCount) }}><RedoIcon /></Button>
            <Button size="large" aria-label="play pause" onClick={startRecursivePlay}>{isPlaying ? <PauseIcon /> : <PlayArrowIcon />}</Button>
            <Button size="large" aria-label="restart" onClick={handleReset}><SettingsBackupRestoreIcon /></Button>
          </ButtonGroup>
        </RowSection>

        <RowSection>
          <NumbersIcon /><ControlsText>{cycleCount}</ControlsText>
        </RowSection>
      </ThemeProvider>
    </ControlsContainer>
  );
};

export default Controls;