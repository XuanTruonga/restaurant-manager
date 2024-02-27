/* eslint-disable jsx-a11y/alt-text */
import TitleLogo from '@Core/components/TitleLogo';
import { Box, Button, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { theme } from '@Core/Theme/theme';
import ControllerTextField from '@Core/components/input/ControllerTextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Regex from '@Core/config/Regex';
import SelectProvince from '@Core/components/input/SelectProvince';

const Register = () => {
  const validateFormRegister = yup.object({
    fullName: yup.string().min(5, 'tối thiểu là 5 ký tự'),
    telephone: yup.string().required('trường bắt buộc').matches(Regex.phoneVn, 'không đúng định dạng')
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validateFormRegister)
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Grid container>
      <Grid item md={5}>
        <Box
          sx={{
            backgroundImage:
              'url(https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31073409/background-register1.jpg)',
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Typography variant='font_36_bold' sx={{ color: theme.palette.primary.contrastText }}>
            Quản lý dễ dàng <br /> Bán hàng đơn giản
          </Typography>
          <Typography sx={{ mt: '18px', color: theme.palette.primary.contrastText }} variant='font_20_base'>
            Hỗ trợ đăng ký 18006162
          </Typography>
        </Box>
      </Grid>
      <Grid item md={7}>
        <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <TitleLogo />
          <form
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            onSubmit={handleSubmit(onSubmit)}>
            <WrapperFormRegister>
              <Box width='100%'>
                <ControllerTextField name='fullName' control={control} label='Nhập họ và tên' fullWidth />
              </Box>
              <Box width='100%'>
                <ControllerTextField name='telephone' control={control} label='Số điện thoại' fullWidth />
              </Box>
              <SelectProvince></SelectProvince>
              <Button type='submit'>ok</Button>
            </WrapperFormRegister>
          </form>
        </Box>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};
const WrapperFormRegister = styled('div')(() => ({
  width: '100%',
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px'
}));
export default Register;
