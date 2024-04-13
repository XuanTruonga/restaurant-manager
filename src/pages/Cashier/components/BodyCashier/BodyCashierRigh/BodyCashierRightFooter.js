import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { theme } from '@Core/Theme/theme';
import IconButton from '@mui/material/IconButton';
import UseAuth from 'components/Hook/useAuth';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import TooltipOffset from 'components/Basic/TooltipCustom';
import Button from '@mui/material/Button';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ToastMessage from 'components/Basic/ToastMessage';

const BodyCashierRightFooter = ({ setOpenPayBill }) => {
  const { user } = UseAuth();

  const handlePayBill = () => {
    setOpenPayBill(true);
  };
  return (
    <Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '10px' }} bgcolor={'#d4dee9'}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={styleNameUser}>
            <SupervisorAccountIcon sx={{ fontSize: '19px', ml: '-2px' }} />
            <Typography sx={{ fontWeight: 600, textWrap: 'nowrap' }}>{user?.name}</Typography>
          </Box>
          <TooltipOffset title='Ghi chú' sx={{ cursor: 'pointer' }}>
            <IconButton>
              <NoteAltIcon sx={{ color: '#333', fontSize: 18 }} />
            </IconButton>
          </TooltipOffset>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography sx={{ display: 'flex', fontWeight: 500 }}>Tổng tiền:</Typography>
          <Typography sx={{ mr: 2, fontWeight: 700, fontSize: theme.typography.text_2xl }}>4200000</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', p: 1, gap: 1 }}>
        <Button onClick={handlePayBill} sx={{ borderRadius: 2, flex: 1, height: 50 }} startIcon={<MonetizationOnIcon />}>
          Thanh toán(F9)
        </Button>
        <Box sx={{ flex: 1 }} color={theme.palette.primary.main}>
          <Button
            sx={{
              bgcolor: theme.palette.primary.bold,
              borderRadius: 2,
              width: '100%',
              height: 50,
              '&:hover': { bgcolor: theme.palette.primary.dark }
            }}
            color='inherit'
            startIcon={<NotificationsIcon />}>
            Thông báo(F10)
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default BodyCashierRightFooter;

const styleNameUser = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  borderRadius: '999px',
  bgcolor: '#ccd5e1',
  p: '6px 12px',
  ml: '8px',
  width: 'fit-content',
  // cursor: 'pointer',
  '&:hover': { bgcolor: '#b6d1ec' }
};
