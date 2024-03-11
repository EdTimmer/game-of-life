import { useRef, useState } from 'react';
import { ControlsContainer, RowSection } from './Controls.css';
import Counter from '../Counter/Counter';
import PlayerButtons from '../PlayerButtons/PlayerButtons';
import Sliders from '../Sliders/Sliders';
import ModalComponent from '../Modal/Modal';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Explanation from '../Explanation/Explanation';

const Controls = () => {
  const playSpeedRef = useRef<number>(15);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <ControlsContainer>
      <RowSection>
        <IconButton aria-label="info" color="secondary" onClick={handleOpenModal}>
          <InfoIcon fontSize="large" />
        </IconButton>

        <ModalComponent isModalOpen={isModalOpen} handleClose={handleCloseModal}>
          <Explanation />
        </ModalComponent>

        <PlayerButtons playSpeedRef={playSpeedRef} />

        <Sliders playSpeedRef={playSpeedRef} />
      </RowSection>

      <Counter />


    </ControlsContainer>
  );
};

export default Controls;
