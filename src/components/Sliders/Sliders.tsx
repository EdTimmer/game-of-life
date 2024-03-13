import { SlidersContainer } from "./Sliders.css"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import SpeedIcon from '@mui/icons-material/Speed';
import { useStore } from "../../store";
import { useState } from "react";

interface SlidersProps {
  playSpeedRef: React.MutableRefObject<number>
}

const Sliders = ({ playSpeedRef }: SlidersProps) => {

  const changeZoomLevel = useStore(state => state.changeZoomLevel)
  const zoomLevel = useStore(state => state.zoomLevel)

  const handleZoomChange = (event: Event, newValue: number | number[]) => {
    changeZoomLevel(newValue as number)
  };

  const [speedValue, setSpeedValue] = useState(15)

  const handlePlaySpeedChange = (event: Event, newValue: number | number[]) => {
    if (typeof (newValue) === "number") {
      playSpeedRef.current = newValue;
      setSpeedValue(newValue)
    }
  };

  return (
    <SlidersContainer>
      <Box sx={{ width: 200, marginLeft: '20px', marginRight: '30px' }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <SearchIcon sx={{ height: '3rem', width: '3rem' }} />
          <Slider
            value={zoomLevel}
            step={1}
            min={4}
            max={40}
            aria-label="zoom"
            onChange={handleZoomChange} />
        </Stack>
      </Box>

      <Box sx={{ width: 200, marginLeft: '20px', marginRight: '20px' }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <SpeedIcon sx={{ height: '3rem', width: '3rem' }} />
          <Slider
            value={speedValue}
            step={1}
            min={1}
            max={20}
            aria-label="speed"
            onChange={handlePlaySpeedChange} />
        </Stack>
      </Box>
    </SlidersContainer>
  )
}

export default Sliders