/* eslint-disable jsx-a11y/alt-text */
import color from '@Core/Theme/color';

import React from 'react';
import BodyCashierFilterArea from './BodyCashierFilterArea';
import { Avatar, Box, Grid, Typography, styled } from '@mui/material';
import BodyCashierFilterStatus from './BodyCashierFilterStatus';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { theme } from '@Core/Theme/theme';
const diningRoom = ['A2', 'B1', 'C1', 'D1', 'A1', 'A2', 'E2', 'E2', 'E2', 'E2', 'E2', 'E2', 'E2', 'E4', 'E5', 'E6', 'E7'];
const BodyCashierLeft = (props) => {
  const { valueArea, setValueArea, statusDiningRoom, setStatusDiningRoom, setValueDiningRoom, valueDiningRoom } = props;

  const handleRenderBill = (value) => {
    setValueDiningRoom({ name: value, data: {} });
  };
  const handleBillBringBack = () => {
    setValueDiningRoom(null);
  };
  return (
    <Box sx={{ backgroundColor: color.while, width: '56%', height: '100%', borderRadius: '18px', p: '8px 10px', position: 'relative' }}>
      <BodyCashierFilterArea valueArea={valueArea} setValueArea={setValueArea} />
      <BodyCashierFilterStatus statusDiningRoom={statusDiningRoom} setStatusDiningRoom={setStatusDiningRoom} />
      <Box sx={{ height: 'calc(100% - 86px)', overflowY: 'scroll' }}>
        <Grid container spacing={'8px'}>
          <Grid item xl={2} lg={2.4} md={3} xs={4}>
            <WrapperItemDiningRoom
              onClick={handleBillBringBack}
              style={!valueDiningRoom ? { backgroundColor: theme.palette.primary.bold, color: color.while } : null}>
              <Box pt={'9px'}>
                <EnhancedEncryptionIcon
                  sx={{ fontSize: 52, height: 52, color: '#6682A3' }}
                  style={!valueDiningRoom ? { color: color.while } : null}
                />
                <Typography> Mang về</Typography>
              </Box>
            </WrapperItemDiningRoom>
          </Grid>

          {diningRoom.map((item, index) => {
            return (
              <Grid xl={2} lg={2.4} md={3} xs={4} item key={index}>
                <WrapperItemDiningRoom
                  onClick={() => handleRenderBill(item)}
                  style={item === valueDiningRoom.name ? { backgroundColor: theme.palette.primary.bold, color: color.while } : null}>
                  <Box pt='9px' textAlign='-webkit-center'>
                    <Avatar src='https://i.pinimg.com/736x/fc/90/9f/fc909f4bf3a61b87bb11d60f01c0f1f4.jpg' alt='diningRoom'></Avatar>
                    <Typography marginTop={1}>item</Typography>
                  </Box>
                </WrapperItemDiningRoom>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box sx={{ position: 'absolute', right: -20, bottom: -33 }}>
        <img width={66} height={90} src='https://static-kvfnb.kiotviet.vn/Content/WebPos/table-emo.svg' />
      </Box>
    </Box>
  );
};

export default BodyCashierLeft;

const WrapperItemDiningRoom = styled('div')(() => ({
  backgroundColor: color.while,
  height: 125,
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': { backgroundColor: color.gray1 }
}));
