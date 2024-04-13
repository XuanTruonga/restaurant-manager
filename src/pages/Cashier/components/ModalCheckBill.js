/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { Stack, Box, Typography, styled } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import { theme } from '@Core/Theme/theme';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function createData(food, quantityOrder, quantityRepay, quantityUse) {
  return { food, quantityOrder, quantityRepay, quantityUse };
}

const ModalCheckBill = ({ dataDingingRoom }) => {
  const rows = useMemo(() => {
    return dataDingingRoom?.map((item) => {
      return createData(item.name, 159, 15, 15, 15);
    });
  }, []);
  return (
    <Stack>
      <Box sx={{ display: 'flex', mt: 2, mb: 1, ml: 1 }}>
        <AppsIcon sx={{ fontSize: '19px', color: theme.palette.primary.main, ml: '-2px' }} />
        <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main, textWrap: 'nowrap' }}>{`${'A2'} / ${'HTA'}`}</Typography>
      </Box>
      <Box>
        <TableContainer component={Paper} sx={{ maxHeight: 390, boxShadow: 'none' }}>
          <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <StyledTableCell style={{ minWidth: 280 }}>Đồ ăn</StyledTableCell>
                <StyledTableCell align='right'>SL gọi</StyledTableCell>
                <StyledTableCell align='right'>SL trả</StyledTableCell>
                <StyledTableCell align='right'>SL dùng</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => (
                <TableRow key={row.food} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <StyledTableCell component='th' scope='row' sx={{ fontWeight: 600 }}>
                    {row.food}
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: 500 }} align='right'>
                    {row.quantityOrder}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 1, width: '100%', justifyContent: 'end' }}>
                      <Typography sx={styleUpDownFood}>
                        <RemoveIcon color='inherit' sx={styleIconUpDownFood} />
                      </Typography>
                      <Typography sx={{ minWidth: 25, textAlign: 'center', fontWeight: 500 }}>{row.quantityRepay}</Typography>
                      <Typography sx={styleUpDownFood}>
                        <AddIcon color='inherit' sx={styleIconUpDownFood} />
                      </Typography>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell sx={{ fontWeight: 500 }} align='right'>
                    {row.quantityUse}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ textAlign: 'right', mt: 6 }}>
        <Button
          startIcon={<VolumeUpIcon />}
          onClick={() => {}}
          size='large'
          sx={{ mr: '12px', fontWeight: 500, fontSize: 14, minHeight: 38 }}
          variant='contained'>
          Thông báo
        </Button>
        <Button
          startIcon={<AttachMoneyIcon />}
          color='info'
          size='large'
          sx={{ fontWeight: 500, fontSize: 14, minHeight: 38 }}
          variant='contained'>
          Thanh toán
        </Button>
      </Box>
    </Stack>
  );
};

export default ModalCheckBill;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f6f6f6',
    fontSize: 13,
    fontWeight: 700,
    color: '#666666'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13
  }
}));

const styleIconUpDownFood = {
  fontWeight: 500,
  border: '1px solid #333',
  borderRadius: '50%',
  padding: '4px'
};

const styleUpDownFood = {
  color: '#666',
  '&:hover': { color: '#444' },
  display: 'flex',
  cursor: 'pointer'
};
