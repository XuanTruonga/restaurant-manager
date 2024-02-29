import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { theme } from '@Core/Theme/theme';
import React, { Fragment, useState } from 'react';
import { Controller } from 'react-hook-form';
import Required from '../Required';
import ErrorMessageForm from '../ErrorMessageForm';

const ControllerSelect = (props) => {
  const { control, name, sx, label, placeholder, titleMenu, listMenu, path, required } = props;
  const [value, setValue] = useState('');

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur }, fieldState: { error } }) => {
        return (
          <Fragment>
            <FormControl sx={{ minWidth: 120, width: '100%' }}>
              <InputLabel
                size='small'
                sx={{ fontSize: theme.typography.fontSize, top: '1px' }}
                id='demo-simple-select-helper-label'>
                {label}
                {required && <Required />}
              </InputLabel>
              <Select
                {...onBlur}
                placeholder={placeholder}
                labelId={name}
                sx={sx}
                size='small'
                label={label}
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  setValue(e.target.value);
                }}>
                <MenuItem value='' sx={{ fontSize: theme.typography.fontSize }}>
                  <em>{titleMenu}</em>
                </MenuItem>
                {listMenu &&
                  listMenu.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item[path]}>
                        {item[path]}
                      </MenuItem>
                    );
                  })}
              </Select>
             <ErrorMessageForm error={error}/>
            </FormControl>
          </Fragment>
        );
      }}
    />
  );
};

export default ControllerSelect;
