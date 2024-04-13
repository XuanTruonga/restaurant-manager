import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { theme } from '@Core/Theme/theme';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import AnchorIcon from '@mui/icons-material/Anchor';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import useModal from 'components/Hook/useModal';

const BodyCashierRightHead = () => {
  const {
    onModalDetail: onModalCheckBill,
    onModalSecondary: onModalSplitOrder,
    onModalUpdate: onModalUpdateTable,
    onModalPrimary: onModalCombineOrder
  } = useModal();
  return (
    <Stack direction='row' spacing={1} sx={{ p: '12px' }}>
      <Box sx={styleNameBill} onClick={() => onModalUpdateTable()}>
        <AppsIcon sx={{ fontSize: '19px', color: theme.palette.primary.main, ml: '-2px' }} />
        <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, textWrap: 'nowrap' }}>{`${'A2'} / ${'HTA'}`}</Typography>
      </Box>
      <Box sx={styleNameBill} onClick={() => onModalSplitOrder()}>
        <AirlineStopsIcon sx={{ fontSize: '19px', color: theme.palette.primary.main, ml: '-2px' }} />
        <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, textWrap: 'nowrap' }}>Tách đơn</Typography>
      </Box>
      <Box sx={styleNameBill} onClick={() => onModalCombineOrder()}>
        <AnchorIcon sx={{ fontSize: '19px', color: theme.palette.primary.main, ml: '-2px' }} />
        <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, textWrap: 'nowrap' }}>Ghép đơn</Typography>
      </Box>
      <Box flexGrow={1}>
        <Box sx={{ ...styleNameBill }} onClick={() => onModalCheckBill()}>
          <CloudDoneIcon sx={{ fontSize: '19px', color: theme.palette.primary.main, ml: '-2px' }} />
          <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, textWrap: 'nowrap' }}>Kiểm đồ</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default BodyCashierRightHead;

const styleNameBill = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  borderRadius: '999px',
  bgcolor: theme.palette.primary.light,
  p: '6px 12px',
  ml: '8px',
  width: 'fit-content',
  cursor: 'pointer',
  '&:hover': { bgcolor: '#b6d1ec' }
};
