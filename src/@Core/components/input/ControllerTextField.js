import { Box, TextField } from '@mui/material';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import Required from '../Required';
import ErrorMessageForm from '../ErrorMessageForm';

const ControllerTextField = (props) => {
  const { name, control, label, fullWidth, sx, disabled, required } = props;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field, fieldState: { error } }) => {
        return (
          <Fragment>
            <TextField
              {...field}
              label={
                required ? (
                  <Box>
                    {label}
                    <Required />
                  </Box>
                ) : (
                  label
                )
              }
              fullWidth={fullWidth}
              sx={sx}
              disabled={disabled}
            />
            <ErrorMessageForm error={error} />
          </Fragment>
        );
      }}></Controller>
  );
};

export default ControllerTextField;
