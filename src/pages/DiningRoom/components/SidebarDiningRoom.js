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
import { statusDingingRoom } from '../utils/statusDiningRoom';
import SideBarArea from './SideBarArea';

const SidebarDiningRoom = () => {
  const [selectedValue, setSelectedValue] = React.useState('Đang hoạt động');
  const handleChangeRadio = (e) => {
    setSelectedValue(e.target.value);
  };
  console.log(selectedValue);
  return (
    <Box sx={{ minWidth: 186 }}>
      <SideBarArea />
      <SearchInput placeholder='Theo tên phòng/bàn' />
      <Accordion sx={{ mb: '18px' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
          Trạng thái
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue={'Đang hoạt động'}>
              <FormControlLabel
                value={statusDingingRoom.active}
                onChange={handleChangeRadio}
                control={<Radio size='small' color='success' />}
                label='Đang hoạt động'
              />
              <FormControlLabel
                value={statusDingingRoom.shutDown}
                onChange={handleChangeRadio}
                control={<Radio size='small' color='success' />}
                label='Ngừng hoạt động'
              />
              <FormControlLabel
                value={statusDingingRoom.all}
                onChange={handleChangeRadio}
                control={<Radio size='small' color='success' />}
                label='Tất cả'
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default SidebarDiningRoom;