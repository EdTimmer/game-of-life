import { useRef, useState } from 'react';
import { ControlsContainer, RowSection } from './Controls.css';
import PlayerButtons from '../PlayerButtons/PlayerButtons';
import Sliders from '../Sliders/Sliders';
import ModalComponent from '../Modal/Modal';
import PanToolIcon from '@mui/icons-material/PanTool';
import PanToolIconOutlined from '@mui/icons-material/PanToolOutlined';
import InfoIconOutlined from '@mui/icons-material/InfoOutlined';
import FolderIconOutlined from '@mui/icons-material/FolderOutlined';
import Explanation from '../Explanation/Explanation';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Shapes from '../Shapes/Shapes';

interface ControlsProps {
  isPanning: boolean;
  setIsPanning: (isPanning: boolean) => void;
  onCenter: () => void;
}

const Controls = ({ isPanning, setIsPanning, onCenter }: ControlsProps) => {
  const playSpeedRef = useRef<number>(15);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenInfoModal = () => {
    setIsInfo(true);
    setIsModalOpen(true);
  };

  const handleOpenShapesModal = () => {
    setIsInfo(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);
  const [isInfo, setIsInfo] = useState(true);

  const handleTogglePanning = () => setIsPanning(!isPanning);

  return (
    <ControlsContainer>
      <ModalComponent isModalOpen={isModalOpen} handleClose={handleCloseModal}>
        {isInfo ? <Explanation /> : <Shapes handleClose={handleCloseModal} />}
      </ModalComponent>

      <RowSection>
        <PlayerButtons playSpeedRef={playSpeedRef} isPanning={isPanning} isModalOpen={isModalOpen} />
      </RowSection>

      <RowSection>
        <Sliders playSpeedRef={playSpeedRef} />
      </RowSection>

      <RowSection>
        <ButtonGroup
          variant="outlined"
          size="large"
          color="secondary"
          aria-label="controls button group"
        >
          <Button
            aria-label="info button"
            onClick={handleOpenInfoModal}
          >
            <InfoIconOutlined fontSize="large" />
          </Button>
          
          <Button
            aria-label="pan"
            onClick={handleTogglePanning}
          >
            {isPanning ? (
              <PanToolIcon fontSize="large" />
            ) : (
              <PanToolIconOutlined fontSize="large" />
            )}
          </Button>

          <Button
            aria-label="center"
            onClick={onCenter}
          >
            <CenterFocusStrongIcon fontSize="large" />
          </Button>

          <Button
            aria-label="saved"
            onClick={handleOpenShapesModal}
          >
            <FolderIconOutlined fontSize="large" />
          </Button>
        </ButtonGroup>
      </RowSection>
    </ControlsContainer>
  );
};

export default Controls;
