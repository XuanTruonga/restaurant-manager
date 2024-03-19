/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import TitleLogo from '@Core/components/TitleLogo';
import { Box, Button, Stack, Typography, styled } from '@mui/material';
import imgs from 'assets/img';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '@Core/Theme/theme';
import ControllerInput from '@Core/components/input/ControllerInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validateFormLogin from './validateFormLogin';
import ErrorMessageForm from '@Core/components/ErrorMessageForm';
import authService from 'services/authService';
import { useMutation } from '@tanstack/react-query';
import ToastMessage from 'components/Basic/ToastMessage';
import CircularProgress from '@mui/material/CircularProgress';
import ControllerPassword from '@Core/components/input/ControllerPassword';
import UseAuth from 'components/Hook/useAuth';

const Login = () => {
  const [error, setError] = useState(false);
  const { setUser } = UseAuth();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validateFormLogin)
  });
  const { mutate: handleSigin, isPending } = useMutation({
    mutationFn: async (dataFormAuth) => await authService.sigin(dataFormAuth),
    onSuccess: (data) => {
      localStorage.setItem('authToken', JSON.stringify(data?.data?.token));
      setUser(data);
      ToastMessage('success', 'Đăng nhập thành công.');
    },
    onError: () => {
      setError(true);
    }
  });

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
            <Typography sx={{ fontSize: theme.typography.font_14_medium, textAlign: 'center' }}>Đăng nhập</Typography>
          </Box>
          {/*  */}
          <form onSubmit={handleSubmit((value) => handleSigin(value))}>
            <Box sx={{ p: '25px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <ControllerInput control={control} name='username' placeholder='Tên đăng nhâp' sx={{ py: '12px' }} />
              <ControllerPassword control={control} name='password' placeholder='Nhập mật khẩu' outline={false} />
            </Box>
            {/*  */}
            <Box sx={{ display: 'flex', px: '25px', mb: '26px' }}>
              <Link>
                <Typography
                  sx={{
                    fontSize: theme.typography.font_14_base,
                    borderRight: '1px solid #ccc',
                    pr: '12px',
                    '&:hover': { color: theme.palette.secondary.main }
                  }}>
                  Quên mật khẩu?
                </Typography>
              </Link>
              <Link to={'/dang-ky'}>
                <Typography
                  sx={{
                    fontSize: theme.typography.font_14_base,
                    pl: '12px',
                    '&:hover': { color: theme.palette.secondary.main }
                  }}>
                  Đăng ký
                </Typography>
              </Link>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <ErrorMessageForm error={error} message='Tài khoản hoặc mật khẩu không chính xác' />
            </Box>
            <StyleButtomLogin type='submit'>
              {isPending ? <CircularProgress size={30} sx={{ color: '#fff' }} /> : 'Đăng nhập'}
            </StyleButtomLogin>
          </form>
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
const StyleButtomLogin = styled(Button)(() => ({
  height: 55,
  borderTopLeftRadius: '0px',
  borderTopRightRadius: '0px',
  width: '100%',
  fontSize: theme.typography.font_16_semibold,
  padding: '14px',
  marginTop: '6px',
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  cursor: 'pointer',
  '&:hover': { backgroundColor: theme.palette.primary.dark }
}));

export default Login;
