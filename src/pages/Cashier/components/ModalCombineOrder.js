import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import { theme } from '@Core/Theme/theme';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import useModal from 'components/Hook/useModal';
import FormControlLabel from '@mui/material/FormControlLabel';

const ModalCombineOrder = ({ dataDingingRoom }) => {
  const { offModalPrimary: offModalCombineOrder } = useModal();
  const [age, setAge] = React.useState('Chọn phòng/bàn');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Stack fontSize={theme.typography.text_s}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 500 }}>Thao tác:</Typography>
        <Radio defaultValue={''} checked={true} size='small' sx={{ fontSize: 18, ml: 3 }} />
        <Typography>Ghép đơn</Typography>
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
      <Box sx={{ border: '1px #999 solid', borderRadius: 2, overflow: 'hidden', mt: 2 }}>
        <Box sx={{ bgcolor: '#BBBDC0', color: '#4D5258', display: 'flex', p: '10px' }}>
          <Typography sx={{ fontWeight: 500, flex: 1 }}>Khách hàng</Typography>
          <Typography sx={{ fontWeight: 500, flex: 1, textAlign: 'center' }}>Mã đơn</Typography>
          <Typography sx={{ fontWeight: 500, flex: 1, textAlign: 'center' }}>Số lượng hàng</Typography>
          <Typography sx={{ fontWeight: 500, flex: 1, textAlign: 'right' }}>Tổng tiền</Typography>
        </Box>
        <Box sx={{ px: 1, display: 'flex', alignItems: 'center' }}>
          <FormControlLabel sx={{ flex: 1 }} control={<Checkbox checked={true} size='small' />} label='Khách lẻ' />
          <Typography sx={{ textAlign: 'center', flex: 1 }}>1-5</Typography>
          <Typography sx={{ textAlign: 'center', flex: 1 }}>2</Typography>
          <Typography sx={{ textAlign: 'right', flex: 1 }}>300000</Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'right', mt: 6 }}>
        <Button
          onClick={() => offModalCombineOrder()}
          size='large'
          sx={{ mr: '12px', fontWeight: 500, fontSize: 14,minHeight:38 }}
          color='secondary'
          variant='contained'>
          Bỏ qua
        </Button>
        <Button color='info' size='large' sx={{ fontWeight: 500, fontSize: 14,minHeight:38 }} variant='contained'>
          Thực hiện
        </Button>
      </Box>
    </Stack>
  );
};

export default ModalCombineOrder;
