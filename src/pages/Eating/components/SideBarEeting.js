import React from 'react';
import SearchInput from 'components/Basic/SearchInput';
import Box from '@mui/material/Box';
import SideBarCommodityGroup from './SideBarCommodityGroup';

const SidebarEating = ({ dataArea }) => {
  return (
    <Box sx={{ minWidth: 186 }}>
      <SearchInput placeholder='Theo tên hàng hóa' />
      <SideBarCommodityGroup dataArea={dataArea} />
    </Box>
  );
};
export default SidebarEating;
