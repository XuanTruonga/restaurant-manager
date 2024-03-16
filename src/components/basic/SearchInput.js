import color from '@Core/Theme/color';
import { theme } from '@Core/Theme/theme';
import { Box, Input, Typography } from '@mui/material';
import React from 'react';

const SearchInput = ({ placeholder }) => {
  return (
    <Box sx={{ p: '10px 0', mb: 15, bgcolor: color.while, borderRadius: 1 }}>
      <Typography sx={{ fontSize: theme.typography.font_14_semibold, px: '12px' }}>Tìm kiếm</Typography>
      <Box sx={{ p: '10px 12px 0', width: '100%' }}>
        <Input sx={{ fontSize: theme.typography.font_14_base, mb: '10px' }} fullWidth placeholder='fdsfds'></Input>
      </Box>
    </Box>
  );
};

export default SearchInput;
