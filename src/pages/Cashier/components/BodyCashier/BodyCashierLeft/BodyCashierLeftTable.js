/* eslint-disable jsx-a11y/alt-text */
import color from '@Core/Theme/color';

import React from 'react';
import BodyCashierFilterArea from './BodyCashierFilterArea';
import { Box, Grid, Typography, styled } from '@mui/material';
import BodyCashierFilterStatus from './BodyCashierFilterStatus';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { theme } from '@Core/Theme/theme';
import { useQuery } from '@tanstack/react-query';
import areaService from 'services/areaService';
import useSearchParamsHook from 'components/Hook/useSearchParamsHook';
import CustomTabPanel from '../../CustomTabsPanel';
import BodyCashierLeftFood from './BodyCashierLeftFood';

const BodyCashierLeftTable = (props) => {
  const { valueArea, setValueArea, statusDiningRoom, setStatusDiningRoom, setDataDiningRoom, dataDiningRoom, listDiningRoom, value } =
    props;
  const { searchParams } = useSearchParamsHook();
  const { data: dataArea } = useQuery({
    queryKey: ['getArea'],
    queryFn: async () => {
      const res = await areaService.getAll(searchParams);
      return res.data;
    }
  });

  const handleRenderBill = (value) => {
    setDataDiningRoom(value.name);
  };
  const handleBillBringBack = () => {
    setDataDiningRoom(null);
  };
  return (
    <Box
      sx={{
        bgcolor: color.while,
        width: '56%',
        height: '100%',
        borderRadius: '18px',
        p: '6px 10px',
        position: 'relative',
        overflow: 'hidden'
      }}>
      <Box sx={{ overflowY: 'scroll',height:'100%' }}>
        <CustomTabPanel value={value} index={0}>
          <BodyCashierFilterArea valueArea={valueArea} setValueArea={setValueArea} dataArea={dataArea} />
          <BodyCashierFilterStatus statusDiningRoom={statusDiningRoom} setStatusDiningRoom={setStatusDiningRoom} />
          <Box sx={{ height: 'calc(100% - 100px)', overflowY: 'scroll' }}>
            <Grid container spacing={'8px'}>
              <Grid item xl={2} lg={2.4} md={3} xs={4}>
                <WrapperItemDiningRoom
                  onClick={handleBillBringBack}
                  style={!dataDiningRoom ? { backgroundColor: theme.palette.primary.bold, color: color.while } : null}>
                  <Box pt={'9px'}>
                    <EnhancedEncryptionIcon
                      sx={{ fontSize: 52, height: 52, color: '#6682A3' }}
                      style={!dataDiningRoom ? { color: color.while } : null}
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
                      style={item.name === dataDiningRoom ? { backgroundColor: theme.palette.primary.bold, color: color.while } : null}>
                      <Box pt='9px' textAlign='-webkit-center'>
                        {/* <TableIcon />  */}
                        <img
                          style={{ backgroundColor: '#fff', borderRadius: '6px' }}
                          src='https://static-kvfnb.kiotviet.vn/Content/WebPos/table-icon.svg'
                        />
                        <Typography fontWeight={500} marginTop={1}>
                          {item.name}
                        </Typography>
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
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <BodyCashierLeftFood />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default BodyCashierLeftTable;

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
