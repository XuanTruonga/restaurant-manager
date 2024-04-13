import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

export default function PositionedPopper({ open = true, setOpen, children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(false);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Popper sx={{ zIndex: 1200 }} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 2 }}>{children}dasdsadsadsaasddsaasddsa</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Button onClick={handleClick('bottom')}>bottom</Button>
    </Box>
  );
}
