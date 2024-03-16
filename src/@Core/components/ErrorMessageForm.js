import { theme } from '@Core/Theme/theme';
import { Typography } from '@mui/material';
import React, { Fragment } from 'react';

const ErrorMessageForm = ({ error, message ,sx}) => {
  return (
    <Fragment>
      {error && (
        <Typography
          sx={{
            fontSize: theme.typography.font_12_base,
            color: theme.palette.error.light,
            ml: '4px',
            mt: '2px',
            ...sx
          }}>
          {error?.message || message}
        </Typography>
      )}
    </Fragment>
  );
};

export default ErrorMessageForm;
