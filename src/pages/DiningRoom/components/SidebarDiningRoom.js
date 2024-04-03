import React from 'react';
import SearchInput from 'components/Basic/SearchInput';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { statusDingingRoom, statusDiningRoomkey } from '../utils/statusDiningRoom';
import SideBarArea from './SideBarArea';
import useSearchParamsHook from 'components/Hook/useSearchParamsHook';

const SidebarDiningRoom = ({ dataArea }) => {
  const { setParams, searchParams, setSearchParams } = useSearchParamsHook();

  const handleChangeRadio = (e) => {
    if (e.target.value === statusDingingRoom.all) {
      delete searchParams.status;
      setSearchParams(searchParams);
    } else {
      setParams('status', e.target.value);
    }
  };

  return (
    <Box sx={{ minWidth: 186 }}>
      <SideBarArea dataArea={dataArea} />
      <SearchInput placeholder='Theo tên phòng/bàn' />
      <Accordion sx={{ mb: '18px' }} defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
          Trạng thái
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              onChange={handleChangeRadio}
              value={searchParams.status || statusDingingRoom.all}>
              <FormControlLabel
                value={statusDingingRoom.all}
                control={<Radio size='small' color='success' />}
                label={statusDingingRoom.all}
              />
              <FormControlLabel
                value={statusDiningRoomkey.active}
                control={<Radio size='small' color='success' />}
                label={statusDingingRoom.active}
              />
              <FormControlLabel
                value={statusDiningRoomkey.idle}
                control={<Radio size='small' color='success' />}
                label={statusDingingRoom.shutDown}
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default SidebarDiningRoom;
