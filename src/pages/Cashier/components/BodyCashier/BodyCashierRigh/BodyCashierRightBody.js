import React from 'react';
import { Box, Stack, Typography, styled } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import IconButton from '@mui/material/IconButton';
import { theme } from '@Core/Theme/theme';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TooltipOffset from 'components/Basic/TooltipCustom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import color from '@Core/Theme/color';
const array = [1, 2, 1, 2, 1, 3, 5, 5, 5];
const BodyCashierRightBody = () => {
  return (
    <Stack sx={{ height: 'calc(100% - 175px)', px: '10px', overflowY: 'scroll' }}>
      {array.map((item, index) => {
        return (
          <WrapperItemFood key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ flex: 2, display: 'flex', alignItems: 'center' }}>
                <TooltipOffset sx={{ cursor: 'pointer' }} title='Xóa'>
                  <IconButton>
                    <DeleteForeverIcon sx={{ color: '#333', fontSize: 18 }} />
                  </IconButton>
                </TooltipOffset>
                <Typography sx={{ fontWeight: '600' }}>1.Bò sốt tiêu đen</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={styleUpDownFood}>
                  <RemoveIcon color='inherit' sx={styleIconUpDownFood} />
                </Typography>
                <Typography sx={{ minWidth: 25, textAlign: 'center' }}>1</Typography>
                <Typography sx={styleUpDownFood}>
                  <AddIcon color='inherit' sx={styleIconUpDownFood} />
                </Typography>
              </Box>
              <Typography sx={{ borderBottom: '1px solid #ccc', minWidth: 80, textAlign: 'end' }}>180000</Typography>
              <Typography sx={{ fontWeight: '600', mr: '8px' }}>900000</Typography>
            </Box>
            <Box sx={{ display: 'flex', mt: '-8px' }}>
              <TooltipOffset sx={{ cursor: 'pointer' }} title='Món ưu tiên'>
                <IconButton>
                  <StarBorderIcon sx={{ color: '#333', fontSize: 18 }} />
                </IconButton>
              </TooltipOffset>
              <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: color.gray, cursor: 'pointer' }}>
                <EditNoteIcon sx={{ fontSize: 18 }} />
                <Typography sx={{ textWrap: 'nowrap' }}>Nhập ghi chú món thêm.</Typography>
              </Box>
            </Box>
          </WrapperItemFood>
        );
      })}
    </Stack>
  );
};

export default BodyCashierRightBody;

const WrapperItemFood = styled('div')(() => ({
  padding: ' 8px 12px ',
  fontSize: '14px',
  border: '1px solid transparent',
  borderBottom: `1px solid ${color.gray1}`,
  '&:hover': { border: `1px solid ${theme.palette.primary.bold}` },
  borderRadius: '8px'
}));

const styleUpDownFood = {
  color: '#666',
  '&:hover': { color: '#444' },
  display: 'flex',
  cursor: 'pointer'
};

const styleIconUpDownFood = {
  fontWeight: 500,
  border: '1px solid #333',
  borderRadius: '50%',
  padding: '2px'
};
