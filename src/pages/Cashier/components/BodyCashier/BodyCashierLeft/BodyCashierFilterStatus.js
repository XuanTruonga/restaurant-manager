/* eslint-disable default-case */
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FILTER_STATUS } from 'pages/Cashier/utlis/constant';
import { Box } from '@mui/material';
import useSearchParamsHook from 'components/Hook/useSearchParamsHook';
import { statusDiningRoomkey } from 'pages/DiningRoom/utils/statusDiningRoom';

export default function BodyCashierFilterStatus(props) {
  const { statusDiningRoom, setStatusDiningRoom } = props;
  const { searchParams, setParams, setSearchParams } = useSearchParamsHook();

  const handleFilterStatus = (e) => {
    const target = e.target.value;
    if (target === FILTER_STATUS.all) {
      setStatusDiningRoom(target);
      delete searchParams.status;
      setSearchParams(searchParams);
    } else {
      setStatusDiningRoom(target);
      setParams('status', target);
    }
  };

  return (
    <Box sx={{ p: '4px 4px' }}>
      <FormControl>
        <RadioGroup row onChange={handleFilterStatus}>
          <FormControlLabel
            checked={statusDiningRoom === FILTER_STATUS.all}
            value={FILTER_STATUS.all}
            control={<Radio size='small' />}
            label={`${FILTER_STATUS.all} ${1}`}
          />
          <FormControlLabel
            checked={searchParams.status === statusDiningRoomkey.active}
            value={statusDiningRoomkey.active}
            control={<Radio size='small' />}
            label={`${FILTER_STATUS.used} ${1}`}
          />
          <FormControlLabel
            checked={searchParams.status === statusDiningRoomkey.idle}
            value={statusDiningRoomkey.idle}
            control={<Radio size='small' />}
            label={`${FILTER_STATUS.stillEmpty} ${1}`}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
