import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { BoxStyled } from './Modal.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  isModalOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const ModalComponent = ({ isModalOpen, handleClose, children }: ModalProps) => {

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxStyled>
          {children}
        </BoxStyled>
      </Modal>
    </div>
  );
}

export default ModalComponent;
