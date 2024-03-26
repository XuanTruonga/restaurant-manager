import React from 'react';
import BlockIcon from '@mui/icons-material/Block';
import { Button } from '@mui/material';

const ButtomExitModal = ({ closeModal }) => {
  return (
    <div>
      <Button onClick={() => closeModal()} variant='contained' size='small' color='secondary' startIcon={<BlockIcon />}>
        Bỏ qua
      </Button>
    </div>
  );
};

export default ButtomExitModal;
