import { theme } from '@Core/Theme/theme';
import ControllerInput from '@Core/components/input/ControllerInput';
import { Box, Stack, Typography } from '@mui/material';
import RequireText from 'components/Basic/RequireText';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { closeModalSecondary } from '../../../redux/SliceModalSecondary';
import * as yup from 'yup';
import ButtomExitModal from 'components/Modal/ButtomExitModal';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const styleFlex = {
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.typography.font_14_base,
  gap: 2,
  mt: '12px'
};

const FormCreateAreaDiningRoom = () => {
  const a = ''
  const validateCreateAreaDiningRoom = yup.object({
    area_name: yup.string().required('trường bắt buộc').trim(),
    note: yup.string().trim()
  });
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validateCreateAreaDiningRoom)
  });
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Box sx={styleFlex}>
          <RequireText title='Tên khu vực' sx={{ width: theme.restaurants.widthTitleInputControl }} />
          <ControllerInput control={control} name='area_name' />
        </Box>

        <Box sx={styleFlex}>
          <Typography
            sx={{ fontWeight: '700', textWrap: 'nowrap', width: theme.restaurants.widthTitleInputControl }}>
            Ghi chú
          </Typography>
          <ControllerInput
            control={control}
            name='note'
            startIcon={BorderColorIcon}
            sx={{ paddingLeft: '22px' }}
          />
        </Box>

        <Box sx={{ justifyContent: 'end', mt: 4, display: 'flex', gap: 2 }}>
          <Button type='submit' variant='contained' size='small' startIcon={<SaveIcon />}>
            Lưu
          </Button>
          <ButtomExitModal closeModal={closeModalSecondary} />
        </Box>
      </Stack>
    </form>
  );
};

export default FormCreateAreaDiningRoom;
