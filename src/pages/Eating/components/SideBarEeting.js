import React from 'react';
import SearchInput from 'components/Basic/SearchInput';
import Box from '@mui/material/Box';
import SideBarCategoryEating from './SideBarCategoryEating';

const SidebarEating = ({ dataCategoryEating }) => {
  return (
    <Box sx={{ minWidth: 186 }}>
      <SearchInput placeholder='Theo tên hàng hóa' />
      <SideBarCategoryEating dataCategoryEating={dataCategoryEating} />
    </Box>
  );
};
export default SidebarEating;
