/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { theme } from '@Core/Theme/theme';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { CoreTableActionDelete } from '@Core/components/table/CoreTableAction';

const style = {
  position: 'absolute',
  top: '7%',
  left: '50%',
  width: 500,
  transform: 'translate(-50%, 0%)',
  bgcolor: 'background.paper',
  outline: 'none !important',
  boxShadow: 16,
  p: '16px 28px 28px 28px',
  borderRadius: 2,
  '&:focus': { boxShadow: 6 }
};

const styleTypography = {
  width: theme.restaurants.widthTitleInputControl,
  fontSize: theme.typography.font_14_medium
};
const styleFlex = {
  display: 'flex',
  fontSize: theme.typography.font_14_base,
  gap: 2,
  mt: '12px'
};

const ModalDetailAreaDiningRoom = ({ modalDetailArea, setModalUpdateArea, dataArea, setModalDetailArea }) => {
  return (
    <Modal open={modalDetailArea}>
      <Box sx={{ ...style }}>
        <Typography color={theme.palette.primary.dark} p={1} fontSize={theme.typography.font_16_semibold}>
          Sửa khu vực
        </Typography>
        <Box>
          <Box
            sx={{ position: 'absolute', top: '0', right: '0', cursor: 'pointer', p: 1, ouline: 'none' }}
            onClick={() => setModalDetailArea(false)}>
            <CloseIcon />
          </Box>
          <Box sx={styleFlex}>
            <Typography sx={styleTypography}>Tên phòng bàn:</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>{dataArea?.area_name}</Typography>
          </Box>
          <Box sx={{ ...styleFlex, minHeight: '50px' }}>
            <Typography sx={styleTypography}>Ghi chú:</Typography>
            <Typography>{dataArea?.note}</Typography>
          </Box>
          <Box sx={{ justifyContent: 'end', mt: 4, display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              onClick={() => setModalUpdateArea(true)}
              variant='contained'
              size='small'
              startIcon={<SaveIcon />}>
              Cập nhập
            </Button>
            <CoreTableActionDelete btn={true} />
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalDetailAreaDiningRoom;
