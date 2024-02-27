/* eslint-disable jsx-a11y/alt-text */
import TitleLogo from '@Core/components/TitleLogo';
import InputCustom from '@Core/customs/InputCustom';
import { Box, Stack, Typography, styled } from '@mui/material';
import imgs from 'assets/img';
import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '@Core/Theme/theme';

const Login = () => {
  return (
    <Stack>
      <WrapperLogin>
        <Box
          sx={{
            mt: '155px',
            width: '440px',
            bgcolor: theme.palette.primary.contrastText,
            borderRadius: '12px',
            height: 'fit-content',
            overflow: 'hidden'
          }}>
          <Box>
            <TitleLogo />
            <Typography variant='font_14_medium' sx={{ textAlign: 'center' }}>
              Đăng nhập
            </Typography>
          </Box>
          {/*  */}
          <Box sx={{ p: '25px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <InputCustom placeholder='Tên gian hàng' />
            <InputCustom placeholder='Mật khẩu' />
          </Box>
          {/*  */}
          <Box sx={{ display: 'flex', px: '25px' }}>
            <Link>
              <Typography
                variant='font_14_base'
                sx={{
                  borderRight: '1px solid #ccc',
                  pr: '12px',
                  '&:hover': { color: theme.palette.secondary.main }
                }}>
                Quên mật khẩu?
              </Typography>
            </Link>
            <Link to={'/dang-ky'}>
              <Typography
                variant='font_14_base'
                sx={{
                  pl: '12px',
                  '&:hover': { color: theme.palette.secondary.main }
                }}>
                Đăng ký
              </Typography>
            </Link>
          </Box>

          <Typography
            variant='font_16_semibold'
            sx={{
              p: '14px',
              mt: '28px',
              textAlign: 'center',
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              cursor: 'pointer',
              '&:hover': { backgroundColor: theme.palette.primary.dark }
            }}>
            Đăng nhập
          </Typography>
        </Box>
      </WrapperLogin>
    </Stack>
  );
};

const WrapperLogin = styled('div')(() => ({
  backgroundImage: `url(${imgs.bgLogin})`,
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center'
}));

export default Login;
