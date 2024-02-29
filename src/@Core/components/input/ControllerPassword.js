import React, { Fragment } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { theme } from '@Core/Theme/theme';
import { Controller } from 'react-hook-form';
import Required from '../Required';
import ErrorMessageForm from '../ErrorMessageForm';

const ControllerPassword = (props) => {
  const { control, name, required = false, label } = props;

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
              <InputLabel sx={{ fontSize: theme.typography.fontSize }} size='small'>
                {label}
                {required && <Required />}
              </InputLabel>
              <OutlinedInput
                {...field}
                sx={{ fontSize: theme.typography.fontSize }}
                size='small'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={required ? label + '*' : label}
              />
            </FormControl>
            <ErrorMessageForm error={error}/>
          </Fragment>
        );
      }}
    />
  );
};

export default ControllerPassword;
