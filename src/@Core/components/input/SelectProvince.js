import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { theme } from '@Core/Theme/theme';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function SelectLabels() {
  const [value, setValue] = React.useState('');
  const { data } = useQuery({
    queryKey: ['getProvince'],
    queryFn: async () => {
      const res = axios.get('https://vapi.vnappmob.com/api/province');
      return res;
    }
  });
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl sx={{ minWidth: 120, width: '100%' }}>
      <InputLabel
        size='small'
        sx={{ fontSize: theme.typography.fontSize, top: '1px' }}
        id='demo-simple-select-helper-label'>
        Chọn tỉnh thành phố
      </InputLabel>
      <Select
        labelId='demo-simple-select-helper-label'
        value={value}
        label='Chọn tỉnh thành phố'
        sx={{ fontSize: theme.typography.fontSize }}
        size='small'
        onChange={handleChange}>
        <MenuItem value='' sx={{ fontSize: theme.typography.fontSize }}>
          <em>Chọn tỉnh thành phố?</em>
        </MenuItem>
        {}
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
