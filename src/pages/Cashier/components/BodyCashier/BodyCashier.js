import { theme } from '@Core/Theme/theme';
import { styled } from '@mui/material';
import React, { useState } from 'react';
import BodyCashierLeft from './BodyCashierLeft';
import BodyCashierRight from './BodyCashierRight';
import { FILTER_STATUS } from 'pages/Cashier/utlis/constant';

const BodyCashier = () => {
  const [valueArea, setValueArea] = useState({ name: 'all', data: {} });
  const [statusDiningRoom, setStatusDiningRoom] = useState({ name: FILTER_STATUS.all, data: {} });
  const [valueDiningRoom, setValueDiningRoom] = useState({ name: null, data: {} });
  return (
    <WrapperBodyCashier>
      <BodyCashierLeft
        valueArea={valueArea}
        setValueArea={setValueArea}
        statusDiningRoom={statusDiningRoom}
        setStatusDiningRoom={setStatusDiningRoom}
        valueDiningRoom={valueDiningRoom}
        setValueDiningRoom={setValueDiningRoom}
      />
      <BodyCashierRight />
    </WrapperBodyCashier>
  );
};

export default BodyCashier;

const WrapperBodyCashier = styled('div')(() => ({
  fontSize: 13,
  display: 'flex',
  gap: '20px',
  flexDirection: 'row',
  height: `calc(100vh - ${theme.restaurants.HeadCashierHeight} - ${theme.restaurants.BodyCashierHeight} - 6px)`
}));
