/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Stack, Box, Typography, styled } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { theme } from '@Core/Theme/theme';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TableCell from '@mui/material/TableCell';
import { useMemo } from 'react';
import { tableCellClasses } from '@mui/material/TableCell';
import { formatDate } from 'utils/FormatDate';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CloseIcon from '@mui/icons-material/Close';
import ToastMessage from 'components/Basic/ToastMessage';

function createData(food, quantity, price, intoMoney) {
  return { food, quantity, price, intoMoney };
}

export default function ModalPayBill({ setOpenPayBill, openPayBill, dataDingingRoom }) {
  const rows = useMemo(() => {
    return dataDingingRoom?.map((item) => {
      return createData(item.name, 1, 152000, 20000);
    });
  }, [dataDingingRoom]);

  const handleClose = () => setOpenPayBill(false);

  const handlePayBill = () => {
    ToastMessage('success', 'Thanh toán thành công');
  };

  return (
    <Box sx={{}}>
      <Modal open={openPayBill} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Stack sx={{ display: 'flex', gap: 3, flexDirection: 'row' }}>
            <Box sx={{ width: '60%' }}>
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <Typography sx={{ fontSize: theme.typography.font_16_bold }}>Phiếu thanh toán</Typography>
                <Typography sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>B2 / Htb</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 3 }}>
                <PersonPinIcon />
                <Typography>Khách lẻ</Typography>
              </Box>
              <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                <Table sx={{}} size='small' aria-label='a dense table'>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell style={{ width: '100%', fontWeight: 600 }}>Đồ ăn</StyledTableCell>
                      <StyledTableCell style={{ width: '100%', fontWeight: 600 }}>Số lượng</StyledTableCell>
                      <StyledTableCell style={{ width: '100%', fontWeight: 600 }}>Giá bán</StyledTableCell>
                      <StyledTableCell style={{ width: '100%', fontWeight: 600 }}>Thành giá</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows?.map((row) => (
                      <TableRow key={row.food} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <StyledTableCell component='th' scope='row' sx={{ fontWeight: 600 }}>
                          {row.food}
                        </StyledTableCell>
                        <StyledTableCell sx={{ minWidth: 90 }} align='left'>
                          {row.quantity}
                        </StyledTableCell>
                        <StyledTableCell align='left' sx={{ minWidth: 110 }}>
                          {row.price}
                        </StyledTableCell>
                        <StyledTableCell align='left' sx={{ fontWeight: 600, minWidth: 110 }}>
                          {row.intoMoney}
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <Box sx={{ width: '40%' }}>
              <CloseIcon
                onClick={() => setOpenPayBill(false)}
                sx={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', mt: '50px', gap: 1, opacity: 0.8, justifyContent: 'end' }}>
                <Typography>{formatDate()}</Typography>
                <AccessAlarmIcon size='small' />
              </Box>
              <Box sx={{ display: 'flex', mt: 3, justifyContent: 'space-between' }}>
                <Typography sx={{ flex: 1 }}>Tổng tiền hàng</Typography>
                <Typography sx={{ flex: 1, textAlign: 'right', borderBottom: '1px solid #9999' }}>480000</Typography>
              </Box>
              <Box sx={{ display: 'flex', mt: 2, justifyContent: 'space-between' }}>
                <Typography sx={{ flex: 1 }}>Giảm giá</Typography>
                <Typography sx={{ flex: 1, textAlign: 'right', borderBottom: '1px solid #9999' }}>0</Typography>
              </Box>
              <Box sx={{ display: 'flex', mt: 2, justifyContent: 'space-between' }}>
                <Typography sx={{ fontWeight: 600, flex: 1 }}>Khách cần trả</Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    flex: 1,
                    textAlign: 'right',
                    borderBottom: '1px solid #9999',
                    color: theme.palette.primary.main,
                    fontSize: 18
                  }}>
                  480000
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <FormControl>
                  <RadioGroup row defaultValue={'Tiền mặt'}>
                    <FormControlLabel value='Tiền mặt' control={<Radio size='small' />} label='Tiền mặt' />
                    <FormControlLabel value='Thẻ' control={<Radio size='small' />} label='Thẻ' />
                    <FormControlLabel value='Chuyển khoản' control={<Radio size='small' />} label='Chuyển khoản' />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Stack>
          <Button
            onClick={handlePayBill}
            startIcon={<CheckBoxIcon />}
            size='large'
            sx={{ fontWeight: 500, fontSize: 14, minHeight: 38, position: 'absolute', bottom: '30px', right: '50px' }}
            variant='contained'>
            Thanh toán(Enter)
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f6f6f6',
    fontSize: 13
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    lineHeight: '22px'
  }
}));

const style = {
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: 0,
  width: '62vw',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
  height: '100vh',
  '&:focus-visible': {
    outline: 'none'
  },
  borderRadius: '8px 0 0 8px'
};
