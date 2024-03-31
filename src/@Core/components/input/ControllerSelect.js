import { FormControl, InputLabel, MenuItem, Select, styled } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { Controller } from 'react-hook-form';
import Required from '../Required';
import ErrorMessageForm from '../ErrorMessageForm';

const ControllerSelect = (props) => {
  const {
    control,
    name,
    fontSize,
    label,
    defaultValue,
    placeholder,
    titleMenu,
    listMenu,
    path,
    required,
    variant,
    sx,
    colorAfterInput = false
  } = props;
  const [value, setValue] = useState('');
  const StyleFormControl = colorAfterInput ? FormControl : CustomFormControl;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur }, fieldState: { error } }) => {
        return (
          <Fragment>
            <StyleFormControl variant={variant} sx={{ minWidth: 120, width: '100%', fontSize: fontSize }}>
              <InputLabel size='small' sx={{ fontSize: fontSize }} id='demo-simple-select-helper-label'>
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
                value={value || defaultValue || 'null'}
                onChange={(e) => {
                  onChange(e.target.value);
                  setValue(e.target.value);
                }}>
                <MenuItem value='null' sx={{ fontSize: fontSize }}>
                  <em>{titleMenu}</em>
                </MenuItem>
                {listMenu &&
                  listMenu.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item[path]} sx={{ fontSize: fontSize }}>
                        {item[path]}
                      </MenuItem>
                    );
                  })}
              </Select>
              <ErrorMessageForm error={error} />
            </StyleFormControl>
          </Fragment>
        );
      }}
    />
  );
};
const CustomFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiInput-root::after': {
    border: `1px solid ${theme.palette.secondary.main}`
  }
}));
export default ControllerSelect;
