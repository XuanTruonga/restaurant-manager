/* eslint-disable default-case */
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FILTER_STATUS } from 'pages/Cashier/utlis/constant';
import { Box } from '@mui/material';

export default function BodyCashierFilterStatus(props) {
  const { statusDiningRoom, setStatusDiningRoom } = props;
  console.log(statusDiningRoom);
  console.log(statusDiningRoom);
  const handleFilterStatus = (e) => {
    const target = e.target.value;
    switch (target) {
      case FILTER_STATUS.all:
        setStatusDiningRoom({ name: target, data: {} });
        break;
      case FILTER_STATUS.used:
        setStatusDiningRoom({ name: target, data: {} });
        break;
      case FILTER_STATUS.stillEmpty:
        setStatusDiningRoom({ name: target, data: {} });
        break;
    }
  };
  return (
    <Box sx={{ p: '4px 4px' }}>
      <FormControl>
        <RadioGroup row onChange={handleFilterStatus}>
          <FormControlLabel
            checked={statusDiningRoom?.name === FILTER_STATUS.all}
            value={FILTER_STATUS.all}
            control={<Radio size='small' />}
            label={`${FILTER_STATUS.all} ${1}`}
          />
          <FormControlLabel value={FILTER_STATUS.used} control={<Radio size='small' />} label={`${FILTER_STATUS.used} ${1}`} />
          <FormControlLabel value={FILTER_STATUS.stillEmpty} control={<Radio size='small' />} label={`${FILTER_STATUS.stillEmpty} ${1}`} />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
