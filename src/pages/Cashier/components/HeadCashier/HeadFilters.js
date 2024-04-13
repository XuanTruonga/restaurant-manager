/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react';
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
import { Typography } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import PopperItemFood from './PopperItemFood';
import { useEffect } from 'react';
import { useState } from 'react';
import useDebounce from 'components/Hook/useDebounced';

const HeaderFilters = ({ value, setValue, dataEating, setPramsEating, pramsEating, refetchEating }) => {
  const [openPopperSearch, setOpenPopperSearch] = React.useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const debounce = useDebounce(searchValue);
  const searchInputRef = useRef();
  const popperItemFoodRef = useRef();
  const foodData = dataEating?.data;

  useEffect(() => {
    debounce && pramsEating?.name && dataEating?.isSuccess && setOpenPopperSearch(true);
    if (searchValue) {
      setPramsEating({ ...pramsEating, name: debounce });
    } else {
      delete pramsEating?.name;
      setPramsEating(pramsEating);
    }
  }, [debounce, foodData, pramsEating?.name]);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      const checkElementSearchInput = searchInputRef.current?.contains(e.target);

      if (popperItemFoodRef.current) {
        const checkElementEatings = popperItemFoodRef.current?.contains(e.target);
        if (!checkElementEatings && !checkElementSearchInput) {
          setOpenPopperSearch(false);
          setSearchValue(null);
          setPramsEating({});
        }
      }
    });
  }, []);
  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: '0 16px', mr: '12px', display: 'flex', gap: 2, height: theme.restaurants.HeadCashierHeight, alignItems: 'center' }}>
      <Box sx={{ display: 'flex' }}>
        <StyleTabs value={value} onChange={handleChangeTabs}>
          <Tab iconPosition='start' icon={<AddPhotoAlternateIcon sx={{ fontSize: 15 }} />} label={FILTER.diningRoom} />
          <Tab iconPosition='start' icon={<ArticleIcon sx={{ fontSize: 15 }} />} label={FILTER.menu} />
        </StyleTabs>
      </Box>

      <Box sx={{ width: ' 100%', position: 'relative' }}>
        <Box sx={{ height: theme.restaurants.HeadCashierHeight, pb: '2px', flex: '1' }}>
          <StylePaper component='form'>
            <IconButton sx={{ p: '10px', pointerEvents: 'none' }}>
              <SearchIcon sx={{ fontSize: theme.typography.text_xl }} />
            </IconButton>
            <InputBase
              ref={searchInputRef}
              onChange={(e) => {
                setSearchValue(e.target.value.trim());
                !e.target.value.trim() && setOpenPopperSearch(false);
              }}
              sx={{ ml: 1, flex: 1, '& .MuiInputBase-input': { p: 0 }, fontSize: theme.typography.text_m }}
              size='small'
              placeholder='Tìm kiếm'
            />
          </StylePaper>
        </Box>
        {openPopperSearch && (
          <WrapperPopperMenuSearch ref={popperItemFoodRef} sx={{ boxShadow: 9 }}>
            {foodData?.length > 0 ? (
              foodData.map((item) => {
                return <PopperItemFood key={item.id} food={item} />;
              })
            ) : (
              <Box>
                <Typography>sdsa</Typography>
              </Box>
            )}
          </WrapperPopperMenuSearch>
        )}
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
const WrapperPopperMenuSearch = styled('div')(() => ({
  position: 'absolute',
  left: '0',
  zIndex: 1500,
  right: '-52px',
  backgroundColor: '#fff',
  borderRadius: '4px 4px 8px 8px',
  minHeight: 100,
  maxHeight: 390,
  overflow: 'auto',
  padding: '8px 4px',
  minWidth: '280px'
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
