import { theme } from '@Core/Theme/theme';
import ControllerCheckBox from '@Core/components/input/ControllerCheckBox';
import ControllerPassword from '@Core/components/input/ControllerPassword';
import ControllerSelect from '@Core/components/input/ControllerSelect';
import ControllerTextField from '@Core/components/input/ControllerTextField';
import pathFormController from 'utils/constants/pathFormController';
import { Box, Typography, styled } from '@mui/material';
import { Button } from 'flowbite-react';
import React from 'react';

const FormRegister = (props) => {
  const { data, control, handleSubmit, onSubmit } = props;

  return (
    <form style={{ width: '100%', display: 'flex', justifyContent: 'center' }} onSubmit={handleSubmit(onSubmit)}>
      <WrapperFormRegister>
        <Box width='100%'>
          <ControllerTextField
            name='fullName'
            control={control}
            label='Nhập họ và tên'
            fullWidth
            required={true}
          />
        </Box>
        <Box width='100%'>
          <ControllerTextField
            name='telephone'
            control={control}
            label='Số điện thoại'
            fullWidth
            required={true}
          />
        </Box>
        <ControllerSelect
          name='province'
          control={control}
          label='Chọn tỉnh/thành phố'
          titleMenu={'Chọn tỉnh thành phố ?'}
          listMenu={data?.data?.results}
          path={pathFormController.province_name}
          required={true}
          fontSize={theme.typography.fontSize}
        />
        <Box width='100%'>
          <ControllerTextField
            name='stall_name'
            control={control}
            label='Tên gian hàng'
            fullWidth
            required={true}
          />
        </Box>
        <Box width='100%'>
          <ControllerPassword control={control} name='password' required={true} label='Nhập mật khẩu' />
        </Box>
        <Box sx={{ width: '100%', ml: '-16px', display: 'flex', position: 'relative' }}>
          <ControllerCheckBox control={control} name='policy' />
          <Box sx={{ fontSize: theme.typography.font_15_base, display: 'flex', alignItems: 'center', mt: '1px' }}>
            <Typography>Tôi đã đọc và đồng ý</Typography>
            <Typography
              sx={{
                mt: '1px',
                mx: '4px',
                cursor: 'pointer',
                color: theme.palette.primary.main,
                fontSize: theme.typography.font_15_semibold
              }}>
              Điều khoản và chính sách sử dụng
            </Typography>
            <Typography mt={'1px'}>của KiotViet</Typography>
          </Box>
        </Box>
        <Button type='submit'>ok</Button>
      </WrapperFormRegister>
    </form>
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
export default FormRegister;
