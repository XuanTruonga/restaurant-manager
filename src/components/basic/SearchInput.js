import color from '@Core/Theme/color';
import { theme } from '@Core/Theme/theme';
import { Box, Typography } from '@mui/material';
import React from 'react';
import DebouncedInput from './DebouncedInput';
import useSearchParamsHook from 'components/Hook/useSearchParamsHook';

const SearchInput = ({ placeholder }) => {
  const { setSearchParams, setParams, searchParams } = useSearchParamsHook();
  const handleSearch = (e) => {
    if (e) {
      setParams('name', e);
    }
    if (!e) {
      delete searchParams.name;
      setSearchParams(searchParams);
    }
  };
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
        <DebouncedInput
          onChange={handleSearch}
          sx={{ fontSize: theme.typography.text_m, mb: '10px' }}
          fullWidth
          placeholder={placeholder}></DebouncedInput>
      </Box>
    </Box>
  );
};

export default SearchInput;
