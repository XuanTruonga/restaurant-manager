import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { theme } from '@Core/Theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modalSlice';
import { modalSelector } from '../../redux/selectors';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none !important',
  boxShadow: 16,
  p: '16px 28px 28px 28px',
  borderRadius: 2,
  '&:focus': { boxShadow: 6 }
};

export default function BasicModal(props) {
  const { title, children } = props;
  const { status } = useSelector(modalSelector);
  const dispath = useDispatch();
  return (
    <div>
      <Modal open={status}>
        <Box sx={style}>
          <Box
            sx={{ position: 'absolute', top: '0', right: '0', cursor: 'pointer', p: 1, ouline: 'none' }}
            onClick={() => dispath(closeModal())}>
            <CloseIcon />
          </Box>
          <Typography fontSize={theme.typography.font_16_semibold}>{title}</Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
