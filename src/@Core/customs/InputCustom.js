import { Input } from '@mui/material';
import React from 'react';

const InputCustom = (props) => {
  return <Input {...props} sx={{ '&.MuiInputBase-root': { fontSize: '15px' }, py: '12px' }} />;
};

export default InputCustom;
