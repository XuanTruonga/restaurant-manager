/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { theme } from '@Core/Theme/theme';
import RequireText from 'components/Basic/RequireText';
import ControllerInput from '@Core/components/input/ControllerInput';
import { Button, Stack } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '7%',
  left: '50%',
  width: 500,
  transform: 'translate(-50%, 0%)',
  bgcolor: 'background.paper',
  outline: 'none !important',
  boxShadow: 16,
  p: '16px 28px 28px 28px',
  borderRadius: 2,
  '&:focus': { boxShadow: 6 }
};
const styleFlex = {
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.typography.font_14_base,
  gap: 2,
  mt: '12px'
};

const ModalUpdateAreaDiningRoom = ({ modalUpdateArea, dataArea, setModalUpdateArea }) => {
  const validateCreateAreaDiningRoom = yup.object({
    area_name: yup.string().required('trường bắt buộc').trim(),
    note: yup.string().trim()
  });
  const { control, handleSubmit, setValue } = useForm({
    resolver: yupResolver(validateCreateAreaDiningRoom)
  });
  const onSubmit = (value) => {
    console.log(value);
  };
  useEffect(() => {
    setValue('area_name', dataArea?.area_name);
    setValue('note', dataArea?.note);
  }, [dataArea]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal open={modalUpdateArea}>
        <Box sx={{ ...style }}>
          <Typography color={theme.palette.primary.dark} p={1} fontSize={theme.typography.font_16_semibold}>
            Sửa khu vực
          </Typography>
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
              <Button
                onClick={() => setModalUpdateArea(false)}
                variant='contained'
                size='small'
                color='secondary'
                startIcon={<BlockIcon />}>
                Bỏ qua
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </form>
  );
};

export default ModalUpdateAreaDiningRoom;
