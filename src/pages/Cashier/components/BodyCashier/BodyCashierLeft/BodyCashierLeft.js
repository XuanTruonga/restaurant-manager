/* eslint-disable jsx-a11y/alt-text */
import color from '@Core/Theme/color';

import React from 'react';
import BodyCashierFilterArea from './BodyCashierFilterArea';
import { Box, Grid, Typography, styled } from '@mui/material';
import BodyCashierFilterStatus from './BodyCashierFilterStatus';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { theme } from '@Core/Theme/theme';
import useApiGetAll from 'components/Hook/useApiGetAll';
import TableIcon from 'assets/svg/TableIcon';

const BodyCashierLeft = (props) => {
  const { valueArea, setValueArea, statusDiningRoom, setStatusDiningRoom, setDataDiningRoom, dataDiningRoom } = props;
  const { dataDiningRoom: listDiningRoom } = useApiGetAll();

  const handleRenderBill = (value) => {
    setDataDiningRoom({ name: value.name, data: {} });
  };
  const handleBillBringBack = () => {
    setDataDiningRoom({ name: null, data: {} });
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
              style={!dataDiningRoom.name ? { backgroundColor: theme.palette.primary.bold, color: color.while } : null}>
              <Box pt={'9px'}>
                <EnhancedEncryptionIcon
                  sx={{ fontSize: 52, height: 52, color: '#6682A3' }}
                  style={!dataDiningRoom.name ? { color: color.while } : null}
                />
                <Typography> Mang về</Typography>
              </Box>
            </WrapperItemDiningRoom>
          </Grid>

          {listDiningRoom?.map((item, index) => {
            return (
              <Grid xl={2} lg={2.4} md={3} xs={4} item key={index}>
                <WrapperItemDiningRoom
                  onClick={() => handleRenderBill(item)}
                  style={item.name === dataDiningRoom.name ? { backgroundColor: theme.palette.primary.bold, color: color.while } : null}>
                  <Box pt='9px' textAlign='-webkit-center'>
                    <TableIcon />
                    <Typography marginTop={1}>{item.name}</Typography>
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
