import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import { theme } from '@Core/Theme/theme';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import useModal from 'components/Hook/useModal';

const ModalUpdateTableBill = ({ dataDingingRoom }) => {
  const { offModalUpdate: offModalUpdateTable } = useModal();
  const [personName, setPersonName] = React.useState([]);
  console.log(personName);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <Stack fontSize={theme.typography.text_s}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 500 }}>Loaị đơn hàng:</Typography>
        <Radio defaultValue={''} checked={true} size='small' sx={{ fontSize: 18, ml: 3 }} />
        <Typography>Ngồi tại bàn</Typography>
      </Box>
      <Box display='flex' alignItems='center' gap='44px'>
        <Typography sx={{ fontWeight: 500 }}>Phòng/bàn</Typography>
        <FormControl sx={{ m: 1, width: 300 }}>
          <Select
            variant='standard'
            defaultValue={'A2'}
            multiple
            value={personName}
            onChange={handleChange}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}>
            {dataDingingRoom?.map((table) => (
              <MenuItem key={table.id} value={table.name} style={getStyles(table.name, personName, theme)}>
                {table.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ border: '1px #999 solid', borderRadius: 2, overflow: 'hidden', mt: 2 }}>
        <Box sx={{ bgcolor: '#BBBDC0', color: '#4D5258', display: 'flex', p: '10px' }}>
          <Typography sx={{ fontWeight: 500, flex: 1 }}>Khách hàng</Typography>
          <Typography sx={{ fontWeight: 500, flex: 1, textAlign: 'center' }}>Mã đơn</Typography>
          <Typography sx={{ fontWeight: 500, flex: 1, textAlign: 'center' }}>Số lượng hàng</Typography>
          <Typography sx={{ fontWeight: 500, flex: 1, textAlign: 'right' }}>Tổng tiền</Typography>
        </Box>
        <Box sx={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Bạn chưa có hóa đơn nào</Box>
      </Box>
      <Box sx={{ textAlign: 'right', mt: 6 }}>
        <Button
          onClick={() => offModalUpdateTable()}
          size='large'
          sx={{ mr: '12px', fontWeight: 500, fontSize: 14, minHeight: 38 }}
          color='secondary'
          variant='contained'>
          Bỏ qua
        </Button>
        <Button color='info' size='large' sx={{ fontWeight: 500, fontSize: 14, minHeight: 38 }} variant='contained'>
          Cập nhập
        </Button>
      </Box>
    </Stack>
  );
};

export default ModalUpdateTableBill;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    fontSize: 14
  };
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.7 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
