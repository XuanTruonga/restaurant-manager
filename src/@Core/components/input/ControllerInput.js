import { theme } from '@Core/Theme/theme';
import { Box, Input, styled } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import ErrorMessageForm from '../ErrorMessageForm';
import color from '@Core/Theme/color';

const ControllerInput = (props) => {
  const { placeholder, name, control, sx, fullWidth = true, startIcon } = props;
  const StartIcon = startIcon;
  return (
    <Controller
      defaultValue=''
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Box flexGrow={1} position={'relative'}>
            {startIcon && (
              <StartIcon
                sx={{
                  position: 'absolute',
                  fontSize: theme.typography.font_14_base,
                  color: color.gray,
                  top: '9px',
                  left: '4px'
                }}
              />
            )}
            <StyleInput
              fullWidth={fullWidth}
              placeholder={placeholder}
              {...field}
              sx={{ py: '8px', fontSize: theme.typography.fontSize, flexGrow: '1', ...sx }}></StyleInput>
            <ErrorMessageForm error={error} sx={{ mt: '4px' }} />
          </Box>
        );
      }}
    />
  );
};
const StyleInput = styled(Input)(() => ({
  '& .MuiInput-input': {
    padding: '0'
  },
  '&.MuiInput-root::after': {
    border: `1px solid ${theme.palette.secondary.main}`
  },
  '&.MuiInputBase-root': { fontSize: 'inherit' }
}));
export default ControllerInput;
