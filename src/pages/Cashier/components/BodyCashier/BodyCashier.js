import color from '@Core/Theme/color';
import { theme } from '@Core/Theme/theme';
import { Box, styled } from '@mui/material';
import React from 'react';

const BodyCashier = () => {
  return (
    <WrapperBodyCashier>
      <Box sx={{ backgroundColor: color.while, width: '50%', height: '100%', borderRadius: '18px' }}>s</Box>
      <Box sx={{ backgroundColor: color.while, width: '50%', height: '100%', borderRadius: '18px' }}>s</Box>
    </WrapperBodyCashier>
  );
};

export default BodyCashier;

const WrapperBodyCashier = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
  flexDirection: 'row',
  height: `calc(100vh - ${theme.restaurants.HeadCashierHeight} - ${theme.restaurants.BodyCashierHeight} - 6px)`
}));
