import React from 'react';
import { theme } from '@Core/Theme/theme';
import { Box, styled } from '@mui/material';
import color from '@Core/Theme/color';
import useApiGetAll from 'components/Hook/useApiGetAll';

const BodyCashierFilterArea = (props) => {
  const { valueArea, setValueArea } = props;
  const { dataArea } = useApiGetAll();

  const handleFilterArea = () => {
    setValueArea({ name: 'all', data: {} });
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <StyleAreaItem style={valueArea.name === 'all' ? styleActiveArea : null} onClick={handleFilterArea}>
        Tất cả
      </StyleAreaItem>
      {dataArea?.map((area, index) => {
        return (
          <StyleAreaItem style={valueArea === area.name ? styleActiveArea : null} onClick={() => setValueArea(area.name)} key={index}>
            {area.name}
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
