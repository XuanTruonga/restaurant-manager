import { theme } from '@Core/Theme/theme';
import { Checkbox, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';

const ControllerCheckBox = (props) => {
  const { name, control, defaultChecked } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Fragment>
            <Checkbox {...field} defaultChecked={defaultChecked}></Checkbox>
            {error?.message && (
              <Typography
                sx={{
                  fontSize: theme.typography.font_12_base,
                  color: theme.palette.error.main,
                  position: 'absolute',
                  bottom: '-8px',
                  left: '14px'
                }}>
                {error?.message}
              </Typography>
            )}
          </Fragment>
        );
      }}
    />
  );
};

export default ControllerCheckBox;
