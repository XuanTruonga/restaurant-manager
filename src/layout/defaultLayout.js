import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { DASHBOARD } from '../utils/constants';
import { theme } from '../theme';
import MenuItem from './components/MenuItem';
import Header from './components/Header';

const DefaultLayout = () => {
  return (
    <Box
      sx={{
        padding: '24px',
        height: '100vh',
        backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} ,${theme.palette.primary.dark})`
      }}>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[200],
          borderRadius: '8px',
          overflow: 'hidden',
          height: '-webkit-fill-available'
        }}>
        <Header />
        <Box sx={{ p: '14px 40px' }}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={2}>
              <Stack>
                <Box
                  sx={{
                    overflow: 'hidden',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '22px',
                    height: '590px',
                    overflowY: 'auto',
                    pt: '4px'
                  }}>
                  {DASHBOARD.map((item) => {
                    return (
                      <Box key={item.id}>
                        <MenuItem item={item} />
                      </Box>
                    );
                  })}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6} md={10}>
              <Typography>xs=6 md=8</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
