import color from '@Core/Theme/color';
import { theme } from '@Core/Theme/theme';
import { Typography } from '@mui/material';
import React from 'react';

const Required = () => {
  return (
    <Typography
      sx={{
        display: 'inline-block',
        color: color.error,
        fontSize: theme.typography.fontSize,
        ml: '2px'
      }}>
      *
    </Typography>
  );
};

export default Required;
