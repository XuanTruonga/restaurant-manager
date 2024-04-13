/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { Stack, Box, Typography, styled } from '@mui/material';
import Radio from '@mui/material/Radio';
import { theme } from '@Core/Theme/theme';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
import useModal from 'components/Hook/useModal';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BlockIcon from '@mui/icons-material/Block';

function createData(food, quantityOrderRoot, quantitySplit) {
  return { food, quantityOrderRoot, quantitySplit };
}

const ModalSplitOrder = ({ dataDingingRoom }) => {
  const { offModalSecondary: offModalSplitOrder } = useModal();
  const [age, setAge] = React.useState('Chọn phòng/bàn');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const rows = useMemo(() => {
    return dataDingingRoom?.map((item) => {
      return createData(item.name, 159);
    });
  }, []);

  return (
    <Stack fontSize={theme.typography.text_s}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 500 }}>Thao tác:</Typography>
        <Radio defaultValue={''} checked={true} size='small' sx={{ fontSize: 18, ml: 3 }} />
        <Typography>Tách đơn</Typography>
      </Box>
      <Box display='flex' alignItems='center' gap='44px'>
        <Typography sx={{ fontWeight: 500 }}>Ghép đến:</Typography>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 200 }}>
          <Select labelId='demo-simple-select-standard-label' id='demo-simple-select-standard' value={age} onChange={handleChange}>
            <MenuItem sx={{ fontSize: 14 }} value='Chọn phòng/bàn'>
              <em>Chọn phòng/bàn</em>
            </MenuItem>
            <MenuItem sx={{ fontSize: 14 }} value={10}>
              Ten
            </MenuItem>
            <MenuItem sx={{ fontSize: 14 }} value={20}>
              Twenty
            </MenuItem>
            <MenuItem sx={{ fontSize: 14 }} value={30}>
              Thirty
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper} sx={{ maxHeight: 348, boxShadow: 'none' }}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ minWidth: 280 }}>Đồ ăn</StyledTableCell>
              <StyledTableCell align='right'>SL trên đơn gốc</StyledTableCell>
              <StyledTableCell align='right'>SL trên đơn tách</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.food} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <StyledTableCell component='th' scope='row'>
                  {row.food}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.quantityOrderRoot}</StyledTableCell>
                <StyledTableCell align='right'>
                  <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 1, width: '100%', justifyContent: 'end' }}>
                    <Typography sx={styleUpDownFood}>
                      <RemoveIcon color='inherit' sx={styleIconUpDownFood} />
                    </Typography>
                    <Typography sx={{ minWidth: 25, textAlign: 'center' }}>1</Typography>
                    <Typography sx={styleUpDownFood}>
                      <AddIcon color='inherit' sx={styleIconUpDownFood} />
                    </Typography>
                  </Box>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ textAlign: 'right', mt: 6 }}>
        <Button
          startIcon={<BlockIcon />}
          onClick={() => offModalSplitOrder()}
          size='large'
          sx={{ mr: '12px', fontWeight: 500, fontSize: 14,minHeight:38 }}
          color='secondary'
          variant='contained'>
          Bỏ qua
        </Button>
        <Button startIcon={<CheckBoxIcon />} color='info' size='large' sx={{ fontWeight: 500, fontSize: 14,minHeight:38 }} variant='contained'>
          Thực hiện
        </Button>
      </Box>
    </Stack>
  );
};

export default ModalSplitOrder;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f6f6f6',
    fontSize: 13
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
