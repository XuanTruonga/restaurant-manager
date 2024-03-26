import { theme } from '@Core/Theme/theme';
import ControllerInput from '@Core/components/input/ControllerInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import RequireText from 'components/Basic/RequireText';
import ControllerSelect from '@Core/components/input/ControllerSelect';
import pathFormController from 'utils/constants/pathFormController';
import AddIcon from '@mui/icons-material/Add';
import color from '@Core/Theme/color';
import { useDispatch } from 'react-redux';
import { openModalSecondary } from '../../../redux/SliceModalSecondary';
import validateFormCreateDiningRoom from '../utils/validateCreateDiningRoom';
import SaveIcon from '@mui/icons-material/Save';
import { closeModalPrimary } from '../../../redux/SliceModalPrimary';
import ButtomExitModal from 'components/Modal/ButtomExitModal';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import diningRoomService from 'services/diningRoomService';
import ToastMessage from 'components/Basic/ToastMessage';
import { useCallApi } from 'useContext/ContextCallApi';

const FormCreateDiningRoom = ({ dataArea }) => {
  const dispath = useDispatch();
  const { callApi } = useCallApi();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validateFormCreateDiningRoom)
  });
  const onSubmitAddDiningRoom = async (value) => {
    const area = dataArea.find((item) => value.areaId === item.name);
    const newValue = { ...value, areaId: area.id };
    try {
      diningRoomService.add(newValue);
      ToastMessage('success', 'thêm phòng/bàn thành công');
      callApi();
      dispath(closeModalPrimary());
    } catch (error) {
      ToastMessage('success', 'thêm phòng/bàn thất bại');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitAddDiningRoom)}>
      <Stack>
        <Box sx={styleFlex}>
          <RequireText title='Tên phòng bàn' sx={{ width: theme.restaurants.widthTitleInputControl }} />
          <ControllerInput control={control} name='name' />
        </Box>
        <Box sx={{ ...styleFlex, mt: '8px' }}>
          <Typography sx={styleTitleInput}>Khu vực</Typography>
          <Box
            flexGrow={1}
            sx={
              errors?.areaId?.message
                ? {
                    ...styleControlSelect,
                    '&:after': {
                      bottom: '31%',
                      borderBottom: '1px solid #949494',
                      left: '0',
                      content: '""',
                      position: 'absolute',
                      right: '0'
                    }
                  }
                : { ...styleControlSelect }
            }>
            <ControllerSelect
              variant='standard'
              name='areaId'
              control={control}
              path={pathFormController.area_name}
              listMenu={dataArea}
              titleMenu='Lựa chọn khu vực?'
              fontSize={theme.typography.font_14_base}
              sx={{ py: '2px' }}
            />
            <Box onClick={() => dispath(openModalSecondary())}>
              <AddIcon sx={errors?.areaId?.message ? { ...styleAddIcon, mb: '-1px' } : { ...styleAddIcon }} />
            </Box>
          </Box>
        </Box>
        <Box sx={styleFlex}>
          <Typography sx={styleTitleInput}>Số ghế</Typography>
          <ControllerInput control={control} name='seat' />
        </Box>
        <Box sx={styleFlex}>
          <Typography sx={styleTitleInput}>Ghi chú</Typography>
          <ControllerInput control={control} name='note' startIcon={BorderColorIcon} sx={{ paddingLeft: '22px' }} />
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
const styleAddIcon = {
  fontSize: theme.typography.font_22_base,
  mb: '-14px',
  opacity: 0.7,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: color.gray1,
    borderRadius: '50%'
  }
};
