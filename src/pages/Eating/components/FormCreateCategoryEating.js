import { theme } from '@Core/Theme/theme';
import ControllerInput from '@Core/components/input/ControllerInput';
import { Box, Stack, Typography } from '@mui/material';
import RequireText from 'components/Basic/RequireText';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import * as yup from 'yup';
import ButtomExitModal from 'components/Modal/ButtomExitModal';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ToastMessage from 'components/Basic/ToastMessage';
import useModal from 'components/Hook/useModal';
import categoryService from 'services/categoryService';
import useApiGetAll from 'components/Hook/useApiGetAll';

const styleFlex = {
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.typography.font_14_base,
  gap: 2,
  mt: '12px'
};

const FormCreateCategoryEating = () => {
  const { offModalSecondary: offModalCategoryEating } = useModal();
  const { refetchApiCategoryEating } = useApiGetAll();
  const validateCreateCategoryEating = yup.object({
    name: yup.string().required('trường bắt buộc').trim(),
    note: yup.string().trim()
  });
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validateCreateCategoryEating)
  });
  const onSubmitAddArea = async (value) => {
    try {
      await categoryService.add(value);
      ToastMessage('success', 'Thêm nhóm hàng thành công');
      refetchApiCategoryEating();
      offModalCategoryEating();
    } catch (error) {
      ToastMessage('error', error.response.status === 500 ? 'Nhóm hàng đã tồn tại' : 'Thêm nhóm hàng thất bại');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitAddArea)}>
      <Stack>
        <Box sx={styleFlex}>
          <RequireText title='Tên nhóm' sx={{ width: theme.restaurants.widthTitleInputControl }} />
          <ControllerInput control={control} name='name' />
        </Box>

        <Box sx={styleFlex}>
          <Typography sx={{ fontWeight: '700', textWrap: 'nowrap', width: theme.restaurants.widthTitleInputControl }}>Ghi chú</Typography>
          <ControllerInput control={control} name='note' startIcon={BorderColorIcon} sx={{ paddingLeft: '22px' }} />
        </Box>

        <Box sx={{ justifyContent: 'end', mt: 4, display: 'flex', gap: 2 }}>
          <Button type='submit' variant='contained' size='small' startIcon={<SaveIcon />}>
            Lưu
          </Button>
          <ButtomExitModal closeModal={offModalCategoryEating} />
        </Box>
      </Stack>
    </form>
  );
};

export default FormCreateCategoryEating;
