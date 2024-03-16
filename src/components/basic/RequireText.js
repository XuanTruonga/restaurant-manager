import color from '@Core/Theme/color';
import { Box, Typography } from '@mui/material';
import React from 'react';

const RequireText = ({ sx, title }) => {
  return (
    <Box sx={{ display: 'flex', gap: '4px', textWrap: 'nowrap', ...sx }}>
      <Typography sx={{ fontWeight: '700' }}>{title}</Typography>
      <Typography sx={{ fontWeight: '700', color: color.error }}>*</Typography>
    </Box>
  );
};

export default RequireText;
