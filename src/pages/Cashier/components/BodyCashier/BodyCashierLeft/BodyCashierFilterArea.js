/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { theme } from '@Core/Theme/theme';
import { Box, styled } from '@mui/material';
import color from '@Core/Theme/color';
import useSearchParamsHook from 'components/Hook/useSearchParamsHook';

const BodyCashierFilterArea = (props) => {
  const { valueArea, setValueArea, dataArea } = props;
  const { searchParams, setParams, setSearchParams } = useSearchParamsHook();
  const handleGetAllArea = () => {
    setValueArea('all');
    delete searchParams.areaId;
    setSearchParams(searchParams);
  };

  const handleFilterArea = (area) => {
    setValueArea(area.id);
    setParams('areaId', area.id);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <StyleAreaItem style={valueArea === 'all' ? styleActiveArea : null} onClick={handleGetAllArea}>
        Tất cả
      </StyleAreaItem>
      {dataArea?.map((area, index) => {
        return (
          <StyleAreaItem
            style={searchParams.areaId === String(area.id) ? styleActiveArea : null}
            onClick={() => handleFilterArea(area)}
            key={index}>
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
  borderRadius: '16px',
  cursor: 'pointer',
  fontWeight: '500',
  '&:hover': { backgroundColor: color.gray1 }
}));
const styleActiveArea = {
  backgroundColor: theme.palette.primary.bold,
  color: color.while
};
