import React from 'react';
import { theme } from '@Core/Theme/theme';
import { Box, styled } from '@mui/material';
import color from '@Core/Theme/color';

const areas = [
  { area_name: 'HTA', id: '1' },
  { area_name: 'HTB', id: '2' },
  { area_name: 'HTC', id: '3' },
  { area_name: 'HTD', id: '4' }
];

const BodyCashierFilterArea = (props) => {
  const { valueArea, setValueArea } = props;
  const handleFilterArea = () => {
    setValueArea({ name: 'all', data: {} });    
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <StyleAreaItem style={valueArea.name === 'all' ? styleActiveArea : null} onClick={handleFilterArea}>
        Tất cả
      </StyleAreaItem>
      {areas.map((area, index) => {
        return (
          <StyleAreaItem
            style={valueArea === area.area_name ? styleActiveArea : null}
            onClick={() => setValueArea(area.area_name)}
            key={index}>
            {area.area_name}
          </StyleAreaItem>
        );
      })}
    </Box>
  );
};

export default BodyCashierFilterArea;

const StyleAreaItem = styled('div')(() => ({
  padding: '6px 14px',
  fontWeight: 500,
  borderRadius: '16px',
  cursor: 'pointer',
  '&:hover': { backgroundColor: color.gray1 }
}));
const styleActiveArea = {
  backgroundColor: theme.palette.primary.bold,
  color: color.while
};
