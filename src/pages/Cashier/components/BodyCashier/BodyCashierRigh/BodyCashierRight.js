import color from '@Core/Theme/color';
import { Box } from '@mui/material';
import React from 'react';
import BodyCashierRightHead from './BodyCashierRightHead';
import BodyCashierRightBody from './BodyCashierRightBody';

const BodyCashierRight = (props) => {
  const { dataDiningRoom } = props;
  console.log(dataDiningRoom);
  return (
    <Box sx={{ backgroundColor: color.while, width: '44%', height: '100%', borderRadius: '18px' }}>
      <BodyCashierRightHead />
      <BodyCashierRightBody />
    </Box>
  );
};

export default BodyCashierRight;
