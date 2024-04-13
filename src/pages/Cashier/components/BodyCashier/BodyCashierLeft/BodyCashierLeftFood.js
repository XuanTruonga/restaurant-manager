/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { theme } from '@Core/Theme/theme';
import { Box, Grid, Stack, Typography, styled } from '@mui/material';
import color from '@Core/Theme/color';
import { useQuery } from '@tanstack/react-query';
import categoryService from 'services/categoryService';
import productService from 'services/productService';
import imgs from 'assets/img';
import Pagination from '@mui/material/Pagination';

const BodyCashierLeftFood = (props) => {
  const [valueCategory, setValueCategory] = useState('all');
  const [prams, setPrams] = useState({});

  const { data: categoryFood } = useQuery({
    queryKey: ['getCategory'],
    queryFn: async () => {
      const res = await categoryService.getAll();
      return res.data;
    }
  });

  const { data: listFood } = useQuery({
    queryKey: ['getFood', valueCategory],
    queryFn: async () => {
      const res = await productService.getAll({ ...prams, operator: 'like', pagination: 'true' });
      return res.data;
    }
  });
  const handleGetAllCategory = () => {
    setValueCategory('all');
    setPrams({ ...prams, categoryId: '' });
  };
  const handleFilterCategory = (category) => {
    setValueCategory(category.id);
    setPrams({ ...prams, categoryId: category.id });
  };
  return (
    <Stack>
      <Box sx={{ display: 'flex' }}>
        <StyleCategoryItem style={valueCategory === 'all' ? styleActiveCategory : null} onClick={handleGetAllCategory}>
          Tất cả
        </StyleCategoryItem>
        {categoryFood?.map((category, index) => {
          return (
            <StyleCategoryItem
              style={valueCategory === category.id ? styleActiveCategory : null}
              onClick={() => handleFilterCategory(category)}
              key={index}>
              {category.name}
            </StyleCategoryItem>
          );
        })}
      </Box>
      <Box mt='18px' mb='12px'>
        <Grid container spacing={'13px'}>
          {listFood?.map((item) => {
            return (
              <Grid item sx={4} md={4} lg={2.4}>
                <Box
                  sx={{
                    borderRadius: '12px',
                    height: 170,
                    overflow: 'hidden',
                    border: '1px solid #e6f0fa',
                    cursor: 'pointer',
                    '&:hover': { boxShadow: theme.shadows[3] }
                  }}>
                  <Box
                    sx={{
                      bgcolor: '#e6f0fa',
                      height: 'calc(100% - 63px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative'
                    }}>
                    <img width={'30%'} src={imgs.food} />
                    <Typography
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translate(-50%, 0)',
                        fontSize: 12,
                        fontWeight: '700',
                        borderRadius: '4px 4px 0 0',
                        bgcolor: '#f8fbfe',
                        padding: '2px 4px',
                        color: theme.palette.primary.main
                      }}>
                      {Number(item.price).toLocaleString()}đ
                    </Typography>
                  </Box>
                  <Box sx={{ bgcolor: '#f5f5f6', height: 'inherit', textAlign: 'center', pt: '12px', fontWeight: 600 }}>{item.name}</Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: '3px' }}>
        <Pagination count={10} />
      </Box>
    </Stack>
  );
};

export default BodyCashierLeftFood;

const StyleCategoryItem = styled('div')(() => ({
  padding: '6px 14px',
  borderRadius: '16px',
  cursor: 'pointer',
  fontWeight: '500',
  '&:hover': { backgroundColor: color.gray1 }
}));
const styleActiveCategory = {
  backgroundColor: theme.palette.primary.bold,
  color: color.while
};
