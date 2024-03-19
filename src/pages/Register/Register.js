/* eslint-disable jsx-a11y/alt-text */
import TitleLogo from '@Core/components/TitleLogo';
import { Box, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { theme } from '@Core/Theme/theme';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import validateFormRegister from './validateFormRegister';
import FormRegister from './FormRegister';

const Register = () => {
  const { data } = useQuery({
    queryKey: ['getProvince'],
    queryFn: async () => {
      const res = axios.get('https://vapi.vnappmob.com/api/province');
      return res;
    }
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validateFormRegister)
  });

  return (
    <Grid container>
      <Grid item md={5}>
        <BgImage>
          <Typography sx={{ fontSize: theme.typography.font_36_bold, color: theme.palette.primary.contrastText }}>
            Quản lý dễ dàng <br /> Bán hàng đơn giản
          </Typography>
          <Typography
            sx={{
              fontSize: theme.typography.font_20_base,
              mt: '18px',
              color: theme.palette.primary.contrastText
            }}>
            Hỗ trợ đăng ký 18006162
          </Typography>
        </BgImage>
      </Grid>
      <Grid item md={7}>
        <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <TitleLogo />
          <FormRegister data={data} control={control} handleSubmit={handleSubmit} />
        </Box>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

const BgImage = styled('div')(() => ({
  backgroundImage:
    'url(https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31073409/background-register1.jpg)',
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}));
export default Register;
