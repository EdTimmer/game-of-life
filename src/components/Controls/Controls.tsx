import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ControlsContainer, ControlsText, RowSection } from './Controls.css';
import { useStore } from '../../store';
import { runCycle } from '../../utils/runCycle';
import { runPlay } from '../../utils/runPlay';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ClearIcon from '@mui/icons-material/Clear';
import NumbersIcon from '@mui/icons-material/Numbers';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import SpeedIcon from '@mui/icons-material/Speed';

const Controls = () => {
  const board = useStore(state => state.board);
  const cycleCount = useStore(state => state.cycleCount);
  const incrementCycleCount = useStore(state => state.incrementCycleCount);
  const reset = useStore(state => state.reset);
  const toggleAlive = useStore(state => state.toggleAlive);
  const addToLiveCellsHistory = useStore(state => state.addToLiveCellsHistory);
  const stepBack = useStore(state => state.stepBack)
  const returnToStart = useStore(state => state.returnToStart)
  const changeZoomLevel = useStore(state => state.changeZoomLevel)
  const zoomLevel = useStore(state => state.zoomLevel)

  const shouldStopRef = useRef<boolean>(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleZoomChange = (event: Event, newValue: number | number[]) => {
    changeZoomLevel(newValue as number)
  };

  const playSpeedRef = useRef<number>(10);
  const [speedValue, setSpeedValue] = useState(10)

  const handlePlaySpeedChange = (event: Event, newValue: number | number[]) => {
    if (typeof (newValue) === "number") {
      // console.log('newValue :>> ', newValue);
      playSpeedRef.current = newValue;
      setSpeedValue(newValue)
    }
  };

  const handleStartPlay = () => {
    if (!isPlaying) {
      shouldStopRef.current = false; // ref is set to false when starting
      runPlay(shouldStopRef, playSpeedRef, board, toggleAlive, incrementCycleCount, addToLiveCellsHistory);
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
        <RowSection>
          <ButtonGroup
            variant="contained"
            size="large"
            color="secondary"
            aria-label="Basic button group"
          >
            <Button variant="contained" size="large" aria-label="rewind" onClick={handleReturnToStart} disabled={cycleCount === 0}>
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
              <ClearIcon />
            </Button>
          </ButtonGroup>

          <Box sx={{ width: 200, margin: 1 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <SearchIcon fontSize="large" />
              <Slider
                value={zoomLevel}
                step={1}
                min={4}
                max={40}
                aria-label="zoom"
                onChange={handleZoomChange} />
            </Stack>
          </Box>
          <Box sx={{ width: 200, margin: 1 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <SpeedIcon fontSize="large" />
              <Slider
                value={speedValue}
                step={1}
                min={1}
                max={20}
                aria-label="speed"
                onChange={handlePlaySpeedChange} />
            </Stack>
          </Box>
        </RowSection>

        <RowSection>
          <NumbersIcon />
          <ControlsText>{cycleCount}</ControlsText>
        </RowSection>
    </ControlsContainer>
  );
};

export default Controls;
