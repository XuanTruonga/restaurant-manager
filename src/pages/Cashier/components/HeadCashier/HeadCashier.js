import * as React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import HeaderFilters from './HeadFilters';
import HeadUser from './HeadUser';
import { theme } from '@Core/Theme/theme';

const HeadCashier = ({ value, setValue }) => {
  return (
    <Grid container spacing={2} sx={{ pt: '6px' }}>
      <Grid item xs={6} md={6.6}>
        <HeaderFilters value={value} setValue={setValue} />
      </Grid>
      <Grid item xs={6} md={5.4} sx={{ textAlign: 'end', display: 'flex', justifyContent: 'space-between' }}>
        <StyleTabBill>
          <ArticleIcon sx={{ fontSize: 15, color: theme.palette.primary.main }} />
          <Typography sx={{ color: '#000', fontWeight: 500 }}>Hóa đơn</Typography>
        </StyleTabBill>
        <HeadUser />
      </Grid>
    </Grid>
  );
};

export default HeadCashier;

const StyleTabBill = styled('div')(() => ({
  backgroundColor: '#fff',
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '30px',
  borderTopRightRadius: '16px',
  borderTopLeftRadius: '16px',
  fontSize: '13px',
  textTransform: 'unset',
  padding: '9px 12px',
  minWidth: 116,
  height: 36,
  minHeight: 36,
  textWrap: 'nowrap'
}));
