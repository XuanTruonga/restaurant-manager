import { Box, styled } from '@mui/material';
import React from 'react';

const MenuItem = (props) => {
  const { item } = props;
  const Icon = item.icon;
  return (
    <ItemMenu>
      <Box sx={{ display: 'flex' }}>{<Icon />}</Box>
      <Box>{item.name}</Box>
    </ItemMenu>
  );
};
const ItemMenu = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px',
  cursor: 'pointer',
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}));
export default MenuItem;
