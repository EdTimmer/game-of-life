import * as React from 'react';
import Modal from '@mui/material/Modal';
import { BoxStyled, ScrollableContent } from './Modal.css';

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
          <ScrollableContent>{children}</ScrollableContent>
        </BoxStyled>
      </Modal>
    </div>
  );
};

export default ModalComponent;
