import { Box, Container, Grid, Link } from '@mui/material';
import React from 'react';
import { theme } from '../@Core/Theme/theme';
import { DASHBOARD } from 'utils/constants/dashBoard';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import { useLocation } from 'react-router-dom';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import color from '@Core/Theme/color';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const DefaultLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        height: '100vh',
        overflow: 'hidden'
      }}>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[200]
        }}>
        <Header />
        <Box sx={{ backgroundColor: theme.palette.primary.bold }}>
          <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                overflow: 'hidden',
                display: 'flex'
              }}>
              {DASHBOARD.map((item) => {
                return (
                  <Box key={item.id}>
                    <MenuItem item={item} pathname={pathname} />
                  </Box>
                );
              })}
            </Box>
            <Link
              href='/thu-ngan'
              sx={{
                display: 'flex',
                px: 1,
                backgroundColor: theme.palette.primary.dark,
                borderRadius: '8px',
                '&:hover': {
                  opacity: 0.9
                }
              }}>
              <Tooltip title='Thu ngân'>
                <IconButton>
                  <ConnectedTvIcon sx={{ color: color.while }} />
                </IconButton>
              </Tooltip>
            </Link>
          </Container>
        </Box>
        <Container maxWidth='lg'>
          <Box sx={{ p: '16px 0px', height: '100vh' }}>{children}</Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
