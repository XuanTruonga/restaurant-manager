import { Box, Typography } from '@mui/material';
import { theme } from '../../theme';
import React from 'react';
import { APP_BAR } from '../../utils/constants';
import imgs from '../../assets/img';
import { Link } from 'react-router-dom';

const BoxSX = {
  display: 'flex',
  alignItems: 'center',
  px: '10px',
  gap: '6px',
  borderRadius: '12px',
  color: theme.palette.grey[700],
  height: theme.restaurants.appBarHeight,
  '&:hover': {
    color: theme.palette.grey[900],
    backgroundColor: theme.palette.grey[300],
    cursor: 'pointer'
  }
};

const Header = () => {
  return (
    <Box backgroundColor='#fff'>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          m: '0 40px',
          gap: '40px'
        }}>
        <Box
          sx={{
            color: theme.palette.primary.dark,
            p: '8px 0px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
          <img width='40px' src={imgs.logo} alt='logo'></img>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Kiot Xuân Trường
          </Typography>
        </Box>

        <Box sx={{ display: 'flex' }}>
          {APP_BAR.map((item) => {
            return (
              <Link to={item.link} key={item.id}>
                <Box sx={BoxSX}>
                  <Box display='flex'>{item.icon}</Box>
                  <Typography>{item.name}</Typography>
                </Box>
              </Link>
            );
          })}
          <Box sx={BoxSX}>
            <Box display='flex'>0565442171</Box>
            <Typography>Img</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


export default Header;
