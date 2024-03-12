import { useRef, useState } from 'react';
import { ControlsContainer, RowSection } from './Controls.css';
import Counter from '../Counter/Counter';
import PlayerButtons from '../PlayerButtons/PlayerButtons';
import Sliders from '../Sliders/Sliders';
import ModalComponent from '../Modal/Modal';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import PanToolIcon from '@mui/icons-material/PanTool';
import PanToolIconOutlined from '@mui/icons-material/PanToolOutlined';
import Explanation from '../Explanation/Explanation';

interface ControlsProps {
  isPanning: boolean;
  setIsPanning: (isPanning: boolean) => void;
}

const Controls = ({ isPanning, setIsPanning }: ControlsProps) => {
  const playSpeedRef = useRef<number>(15);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleTogglePanning = () => setIsPanning(!isPanning);

  return (
    <ControlsContainer>
      <RowSection>
        <IconButton aria-label="info" color="secondary" onClick={handleOpenModal}>
          <InfoIcon sx={{ height: '3rem', width: '3rem' }} />
        </IconButton>

        <ModalComponent isModalOpen={isModalOpen} handleClose={handleCloseModal}>
          <Explanation />
        </ModalComponent>

        <PlayerButtons playSpeedRef={playSpeedRef} isPanning={isPanning} />

        <Sliders playSpeedRef={playSpeedRef} />
      </RowSection>

      <Counter />

      <IconButton aria-label="pan" color="secondary" onClick={handleTogglePanning}>
        {
          isPanning ? <PanToolIcon sx={{ height: '3rem', width: '3rem' }} /> : <PanToolIconOutlined sx={{ height: '3rem', width: '3rem' }} />
        }
      </IconButton>


    </ControlsContainer>
  );
};

export default Controls;
