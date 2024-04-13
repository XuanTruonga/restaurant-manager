/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from '@Core/Theme/theme';
import { useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '7%',
  left: '50%',
  transform: 'translate(-50%, 0%)',
  bgcolor: 'background.paper',
  outline: 'none !important',
  boxShadow: 16,
  p: '16px 28px 28px 28px',
  borderRadius: 2,
  '&:focus': { boxShadow: 6 }
};

const BasicModal = (props) => {
  const { status, closeModal, children, width, title, close = false, offModal } = props;
  React.useEffect(() => {}, [status]);
  const dispath = useDispatch();
  return (
    <Modal
      open={status}
      onClose={() => {
        if (close) {
          offModal();
        }
      }}>
      <Box sx={{ ...style, width: width || '500px' }}>
        <Box
          sx={{ position: 'absolute', top: '0', right: '0', cursor: 'pointer', p: 1, ouline: 'none' }}
          onClick={() => dispath(closeModal())}>
          <CloseIcon />
        </Box>
        <Typography p={1} fontSize={theme.typography.font_16_semibold}>
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default BasicModal;
