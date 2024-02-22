import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const DefaultLayout = () => {
  return (
    <Box ml={6} mr={6}>
      <Grid container spacing={2} sx={{ backgroundColor: '#ccc' }}>
        <Grid item xs={6} md={8}>
          <Typography>xs=6 md=8</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography>xs=6 md=8</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography>xs=6 md=8</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DefaultLayout;
