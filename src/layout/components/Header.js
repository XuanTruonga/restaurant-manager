import { Box, Container, Typography } from '@mui/material';
import { theme } from '../../@Core/Theme/theme';
import React from 'react';
import imgs from '../../assets/img';
import { Link } from 'react-router-dom';
import { APP_BAR } from 'utils/constants/appBar';
import UseAuth from 'components/Hook/useAuth';
import ToastMessage from 'components/Basic/ToastMessage';

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
  const { user, logout, isAuthenticated, isInitialized } = UseAuth();
  const handleSignout = () => {
    logout();
    console.log(isAuthenticated, isInitialized);
    ToastMessage('success', 'Đăng xuất thành công.');
  };
  return (
    <Box backgroundColor='#fff' borderBottom='1px solid #ccc'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
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

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
              <Box display='flex'>{user?.user?.username}</Box>
              <Typography sx={{ borderRadius: '50%', overflow: 'hidden', width: 20, height: 20 }}>
                <img src='https://jbsoftware.ca/wp-content/uploads/web-design.jpg' alt='avatar' />
              </Typography>
            </Box>
            <Typography onClick={handleSignout} sx={{ ...BoxSX, textDecoration: 'underline', fontWeight: '500' }}>
              Đăng xuất
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
