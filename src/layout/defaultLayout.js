import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import { theme } from '../@Core/Theme/theme';
import { DASHBOARD } from 'utils/constants/dashBoard';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import { useLocation } from 'react-router-dom';

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
        <Box sx={{ p: '20px 40px', height: '100vh' }}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={2}>
              <Stack>
                <Box
                  sx={{
                    overflow: 'hidden',
                    backgroundColor: theme.palette.primary.bold,
                    borderRadius: '14px',
                    height: theme.restaurants.boxMenuHeight,
                    overflowY: 'auto'
                  }}>
                  {DASHBOARD.map((item) => {
                    return (
                      <Box key={item.id}>
                        <MenuItem item={item} pathname={pathname} />
                      </Box>
                    );
                  })}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6} md={10}>
              <Box sx={{ height: theme.restaurants.boxMenuHeight }}>{children}</Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
