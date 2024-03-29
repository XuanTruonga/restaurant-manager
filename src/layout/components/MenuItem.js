import { Box, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '@Core/Theme/theme';

const MenuItem = (props) => {
  const { item, pathname } = props;
  const Icon = item.icon;
  return (
    <Link to={item.link}>
      <Box
        style={
          pathname === item.link ? { backgroundColor: theme.palette.primary.dark, borderBottom: '1px solid' } : {}
        }>
        <ItemMenu>
          <Box sx={{ display: 'flex', height: '23px' }}>{<Icon />}</Box>
          <Box sx={{ fontSize: theme.typography.font_14_medium, textWrap: 'nowrap' }}>{item.name}</Box>
        </ItemMenu>
      </Box>
    </Link>
  );
};
const ItemMenu = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '11px',
  cursor: 'pointer',
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}));
export default MenuItem;
