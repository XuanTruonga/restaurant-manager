import color from '@Core/Theme/color';
import { theme } from '@Core/Theme/theme';
import { Box, Input, Typography, styled } from '@mui/material';
import React from 'react';

const SearchInput = ({ placeholder }) => {
  return (
    <Box
      sx={{
        p: '14px 0',
        bgcolor: color.while,
        borderRadius: 1,
        marginBottom: '18px',
        boxShadow: theme.shadows[2]
      }}>
      <Typography sx={{ fontSize: theme.typography.font_semibold, px: '16px' }}>Tìm kiếm</Typography>
      <Box sx={{ p: '10px 16px 0', width: '100%' }}>
        <StyleInput
          sx={{ fontSize: theme.typography.text_m, mb: '10px' }}
          fullWidth
          placeholder={placeholder}></StyleInput>
      </Box>
    </Box>
  );
};
const StyleInput = styled(Input)(({ theme }) => ({
  '&.MuiInput-root::after': {
    borderBottom: `2px solid ${theme.palette.secondary.main}`
  }
}));

export default SearchInput;
