import React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Tabs from '@mui/material/Tabs';
import Paper from '@mui/material/Paper';
import { theme } from '@Core/Theme/theme';
import { styled } from '@mui/material';
import { FILTER } from 'pages/Cashier/utlis/constant';
import ArticleIcon from '@mui/icons-material/Article';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const HeaderFilters = ({ value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ p: '0 16px', mr: '12px', display: 'flex', gap: 2, height: theme.restaurants.HeadCashierHeight, alignItems: 'center' }}>
      <Box sx={{ display: 'flex' }}>
        <StyleTabs value={value} onChange={handleChange}>
          <Tab iconPosition='start' icon={<AddPhotoAlternateIcon sx={{ fontSize: 15 }} />} label={FILTER.diningRoom} />
          <Tab iconPosition='start' icon={<ArticleIcon sx={{ fontSize: 15 }} />} label={FILTER.menu} />
        </StyleTabs>
      </Box>
      <Box sx={{ height: theme.restaurants.HeadCashierHeight, pb: '2px', flex: '1' }}>
        <StylePaper component='form'>
          <IconButton sx={{ p: '10px' }}>
            <SearchIcon sx={{ fontSize: theme.typography.text_xl }} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, '& .MuiInputBase-input': { p: 0 }, fontSize: theme.typography.text_m }}
            size='small'
            placeholder='Tìm kiếm'
          />
        </StylePaper>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Box sx={styleBox}>
          <AddIcon sx={{ fontSize: theme.typography.text_2xl, color: '#fff' }} />
        </Box>
        <Box sx={styleBox}>
          <EditIcon sx={{ fontSize: theme.typography.text_xl, color: '#fff' }} />
        </Box>
      </Box>
    </Box>
  );
};

const StyleTabs = styled(Tabs)(() => ({
  minHeight: 36,
  height: 36,
  '& .css-kbw3qb-MuiButtonBase-root-MuiTab-root.Mui-selected': {
    backgroundColor: '#fff',
    color: 'blue'
  },
  '& .MuiButtonBase-root': {
    backgroundColor: theme.palette.primary.bold,
    borderTopRightRadius: '16px',
    borderTopLeftRadius: '16px',
    fontWeight: '500',
    color: '#fff',
    fontSize: '13px',
    textTransform: 'unset',
    padding: '9px 12px',
    minWidth: 116,
    height: 36,
    minHeight: 36,
    flexShrink: 1,
    textWrap: 'nowrap'
  },
  '& .MuiTabs-indicator': {
    height: 0
  }
}));
const StylePaper = styled(Paper)(() => ({
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  borderRadius: '28px',
  width: '100%'
}));
const styleBox = {
  borderRadius: '50%',
  border: '1px solid #fff',
  width: 28,
  height: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default HeaderFilters;
