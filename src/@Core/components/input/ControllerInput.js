import { Input } from '@mui/material';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';

const ControllerInput = (props) => {
  const { placeholder, name, control } = props;
  return (
    <Controller
      defaultValue=''
      name={name}
      control={control}
      render={({ field, fieldState: error }) => {
        return (
          <Fragment>
            <Input
              placeholder={placeholder}
              {...field}
              sx={{ '&.MuiInputBase-root': { fontSize: '15px' }, py: '12px' }}
            />
          </Fragment>
        );
      }}
    />
  );
};

export default ControllerInput;
