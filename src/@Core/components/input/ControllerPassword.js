import React, { Fragment } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, styled } from '@mui/material';
import { theme } from '@Core/Theme/theme';
import { Controller } from 'react-hook-form';
import Required from '../Required';
import ErrorMessageForm from '../ErrorMessageForm';

const ControllerPassword = (props) => {
  const { control, name, required = false, label, outline = true, placeholder } = props;
  const InputDesigns = outline ? OutlinedInput : StyleInput;
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=''
      render={({ field, fieldState: { error } }) => {
        return (
          <Fragment>
            <FormControl sx={{ width: '100%' }} variant='outlined'>
              {outline && (
                <InputLabel sx={{ fontSize: theme.typography.fontSize }} size='small'>
                  {label}
                  {required && <Required />}
                </InputLabel>
              )}
              <InputDesigns
                placeholder={placeholder}
                {...field}
                sx={{ fontSize: theme.typography.fontSize }}
                size='small'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge='end'>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={required ? label + '*' : label}
              />
            </FormControl>
            <ErrorMessageForm error={error} />
          </Fragment>
        );
      }}
    />
  );
};
const StyleInput = styled(Input)(() => ({
  fontSize: theme.typography.fontSize,
  marginTop: '12px',
  paddingTop: '12px',
  paddingBottom: '12px',
  flexGrow: '1',
  '& .MuiInput-input': {
    padding: '0'
  },
  '&.MuiInput-root::after': {
    border: `1px solid ${theme.palette.secondary.main}`
  },
  '&.MuiInputBase-root': { fontSize: 'inherit' }
}));

export default ControllerPassword;
