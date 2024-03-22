import { theme } from '@Core/Theme/theme';
import { styled } from '@mui/material';
import React from 'react';
import HeadCashier from './components/HeadCashier/HeadCashier';
import BodyCashier from './components/BodyCashier/BodyCashier';
import FooterCashier from './components/FooterCashier/FooterCashier';

const Cashier = () => {
  const [value, setValue] = React.useState(0);
  return (
    <WrapperCashier>
      <HeadCashier value={value} setValue={setValue}></HeadCashier>
      <BodyCashier></BodyCashier>
      <FooterCashier></FooterCashier>
    </WrapperCashier>
  );
};

const WrapperCashier = styled('div')(() => ({
  height: '100vh',
  padding: '0 24px 34px',
  position: 'relative',
  fontSize: theme.typography.text_m,
  backgroundColor: '#00408C'
}));
export default Cashier;
