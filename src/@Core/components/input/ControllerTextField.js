import { theme } from '@Core/Theme/theme';
import { TextField, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';

const ControllerTextField = (props) => {
  const { name, control, label, fullWidth, sx, disabled } = props;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field, fieldState: { error } }) => {
        return (
          <Fragment>
            <TextField {...field} label={label} fullWidth={fullWidth} sx={sx} disabled={disabled} />
            {error?.message && (
              <Typography variant='font_12_base' sx={{ mt: '4px', ml: '6px', color: theme.palette.error.main }}>
                {error?.message}
              </Typography>
            )}
          </Fragment>
        );
      }}></Controller>
  );
};

export default ControllerTextField;
