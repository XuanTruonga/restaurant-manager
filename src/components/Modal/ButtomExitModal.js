import React from 'react';
import { useDispatch } from 'react-redux';
import BlockIcon from '@mui/icons-material/Block';
import { Button } from '@mui/material';

const ButtomExitModal = ({ closeModal }) => {
  const dispath = useDispatch();
  return (
    <div>
      <Button
        onClick={() => dispath(closeModal())}
        variant='contained'
        size='small'
        color='secondary'
        startIcon={<BlockIcon />}>
        Bỏ qua
      </Button>
    </div>
  );
};

export default ButtomExitModal;
