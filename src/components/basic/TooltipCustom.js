import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

export default function TooltipOffset({ children, title, sx }) {
  return (
    <Tooltip
      sx={{ cursor: 'pointer' }}
      title={title}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {}
            }
          ]
        }
      }}>
      {children}
    </Tooltip>
  );
}
