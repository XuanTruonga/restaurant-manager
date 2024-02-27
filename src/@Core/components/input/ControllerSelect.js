import { MenuItem, Select, Typography } from '@mui/material';
import { theme } from 'flowbite-react';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';

const ControllerSelect = (props) => {
  const { control, name, sx, label, placeholder } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: error }) => {
        return (
          <Fragment>
            <Select {...field} placeholder={placeholder} labelId={name} sx={sx} size='small' label={label}>
              <MenuItem value='' sx={{ fontSize: theme.typography.fontSize }}>
                <em>Chọn tỉnh thành phố?</em>
              </MenuItem>
              {}
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            {error && (
              <Typography variant='font_12_base' sx={{ mt: '4px', ml: '6px', color: theme.palette.error.main }}>
                {error?.message}
              </Typography>
            )}
          </Fragment>
        );
      }}
    />
  );
};

export default ControllerSelect;
