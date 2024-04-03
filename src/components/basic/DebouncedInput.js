/* eslint-disable react-hooks/exhaustive-deps */
import { theme } from '@Core/Theme/theme';
import { Input, styled } from '@mui/material';
import React from 'react';

function DebouncedInput({ value: initialValue, onChange, debounce = 500, placeholder, ...props }) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <StyleInput
      onChange={(e) => setValue(e.target.value)}
      sx={{ fontSize: theme.typography.text_m, mb: '10px' }}
      fullWidth
      placeholder={placeholder}></StyleInput>
  );
}

export default DebouncedInput;

const StyleInput = styled(Input)(({ theme }) => ({
  '&.MuiInput-root::after': {
    borderBottom: `2px solid ${theme.palette.secondary.main}`
  }
}));
