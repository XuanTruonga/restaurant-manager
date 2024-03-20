import { Grid } from '@mui/material';
import * as React from 'react';

import HeaderFilters from './HeadFilters';
import HeadUser from './HeadUser';

const HeadCashier = ({ value, setValue }) => {
  return (
    <Grid container sx={{ pt: '6px' }}>
      <Grid item xs={6} md={6}>
        <HeaderFilters value={value} setValue={setValue} />
      </Grid>
      <Grid item xs={6} md={6} sx={{ textAlign: 'end' }}>
        <HeadUser />
      </Grid>
    </Grid>
  );
};

export default HeadCashier;
