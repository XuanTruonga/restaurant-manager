import { theme } from '@Core/Theme/theme';
import ControllerInput from '@Core/components/input/ControllerInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import RequireText from 'components/basic/RequireText';
import ControllerSelect from '@Core/components/input/ControllerSelect';
import pathFormController from 'utils/constants/pathFormController';
import AddIcon from '@mui/icons-material/Add';
import color from '@Core/Theme/color';
import { useDispatch } from 'react-redux';
import { openModalSecondary } from '../../../redux/SliceModalSecondary';
import validateFormCreateDiningRoom from '../utils/validateCreateDiningRoom';
import SaveIcon from '@mui/icons-material/Save';
import { closeModalPrimary } from '../../../redux/SliceModalPrimary';
import ButtomExitModal from 'components/modal/ButtomExitModal';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const styleFlex = {
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.typography.font_14_base,
  gap: 2,
  mt: '12px'
};
const styleTitleInput = {
  fontWeight: '700',
  textWrap: 'nowrap',
  width: theme.restaurants.widthTitleInputControl
};
const styleControlSelect = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  position: 'relative',
  '&:after': {
    borderBottom: '1px solid #949494',
    left: '0',
    bottom: '0',
    content: '""',
    position: 'absolute',
    right: '0'
  }
};

const areas = [
  { area_name: 'HTA', id: '1' },
  { area_name: 'HTB', id: '2' },
  { area_name: 'HTC', id: '3' },
  { area_name: 'HTE', id: '4' }
];

const FormCreateDiningRoom = () => {
  const dispath = useDispatch();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validateFormCreateDiningRoom)
  });
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Box sx={styleFlex}>
          <RequireText title='Tên phòng bàn' sx={{ width: theme.restaurants.widthTitleInputControl }} />
          <ControllerInput control={control} name='diningRoom' />
        </Box>
        <Box sx={styleFlex}>
          <Typography sx={styleTitleInput}>Khu vực</Typography>
          <Box flexGrow={1} sx={styleControlSelect}>
            <ControllerSelect
              variant='standard'
              name='area'
              control={control}
              path={pathFormController.area_name}
              listMenu={areas}
              titleMenu='Lựa chọn khu vực?'
              fontSize={theme.typography.font_14_base}
              sx={{ py: '2px' }}
            />
            <Box onClick={() => dispath(openModalSecondary())}>
              <AddIcon
                sx={{
                  fontSize: theme.typography.font_22_base,
                  mb: '-14px',
                  opacity: 0.7,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: color.gray1,
                    borderRadius: '50%'
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={styleFlex}>
          <Typography sx={styleTitleInput}>Số ghế</Typography>
          <ControllerInput control={control} name='quantitySeats' />
        </Box>
        <Box sx={styleFlex}>
          <Typography sx={styleTitleInput}>Ghi chú</Typography>
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
          <ButtomExitModal closeModal={closeModalPrimary} />
        </Box>
      </Stack>
    </form>
  );
};

export default FormCreateDiningRoom;