import color from '@Core/Theme/color';
import { theme } from '@Core/Theme/theme';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import imgs from 'assets/img';
import React from 'react';

const PopperItemFood = ({ food, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        borderRadius: 2,
        fontSize: '13px',
        borderBottom: `1px solid ${color.gray1}`,
        p: '13px',
        cursor: 'pointer',
        '&:hover': { bgcolor: '#d7ecff' }
      }}>
      <Avatar src={imgs.food} sx={{ bgcolor: theme.palette.primary.light, p: '4px', width: 50, height: 50, mr: '15px' }} />
      <Stack sx={{}}>
        <Typography sx={{ fontWeight: 500, mb: '5px' }}>{food.name}</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box>
            <Typography>{food.id}1</Typography>
            <Box sx={{ display: 'flex', gap: '2px', mt: '2px' }}>
              <Typography>Tồn:</Typography>
              <Typography sx={{ fontWeight: 500 }}>{Number(food.quantity).toLocaleString()}</Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', gap: '2px' }}>
              <Typography>Giá:</Typography>
              <Typography sx={{ fontWeight: 500, color: theme.palette.primary.main }}>{Number(food.price).toLocaleString()}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '2px', mt: '2px' }}>
              <Typography>Đặt:</Typography>
              <Typography sx={{ fontWeight: 500 }}>0</Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default PopperItemFood;
