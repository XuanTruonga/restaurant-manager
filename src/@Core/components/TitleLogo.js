/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography } from '@mui/material';
import imgs from 'assets/img';
import React from 'react';
import { theme } from '@Core/Theme/theme';

const TitleLogo = () => {
  return (
    <Box sx={{ p: '16px', justifyContent: 'center', alignItems: 'center', display: 'flex', gap: '8px' }}>
      <img src={imgs.logo} width='40px'></img>
      <Typography variant='font_20_bold' sx={{ color: theme.palette.primary.dark, fontSize: theme.typography.font_16_bold }}>
        Kiot Xuân Trường
      </Typography>
    </Box>
  );
};

export default TitleLogo;
