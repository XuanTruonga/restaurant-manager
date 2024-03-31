/* eslint-disable react-hooks/exhaustive-deps */
import { theme } from '@Core/Theme/theme';
import ControllerInput from '@Core/components/input/ControllerInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import RequireText from 'components/Basic/RequireText';
import ControllerSelect from '@Core/components/input/ControllerSelect';
import pathFormController from 'utils/constants/pathFormController';
import AddIcon from '@mui/icons-material/Add';
import color from '@Core/Theme/color';
import validateFormCreateDiningRoom from '../utils/validateCreateDiningRoom';
import SaveIcon from '@mui/icons-material/Save';
import ButtomExitModal from 'components/Modal/ButtomExitModal';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import areaService from 'services/areaService';
import { useQuery } from '@tanstack/react-query';
import useModal from 'components/Hook/useModal';
import useApiGetAll from '../../../components/Hook/useApiGetAll';
import ToastMessage from 'components/Basic/ToastMessage';
import diningRoomService from 'services/diningRoomService';

const FormUpdateDiningRoom = () => {
  const { dataArea, refetchApiDiningRoom } = useApiGetAll();
  const { dataModalUpdate, offModalUpdate, onModalSecondary: onModalAddArea } = useModal();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validateFormCreateDiningRoom)
  });

  const { data: areaItem } = useQuery({
    queryKey: ['getAreaItem'],
    queryFn: async () => {
      try {
        const res = await areaService.getOne(dataModalUpdate?.areaId);
        return res.data;
      } catch (error) {}
      return true;
    }
  });
  const onSubmitUpdateDiningRoom = async (valueForm) => {
    const areaFillter = dataArea?.find((area) => {
      return valueForm.areaId === String(area.id) || valueForm.areaId === area.name;
    });
    const newValueForm = { ...valueForm, areaId: String(areaFillter.id) };
    try {
      await diningRoomService.edit(dataModalUpdate.id, newValueForm);
      ToastMessage('success', 'Cập nhập phòng/bàn thành công.');
      offModalUpdate();
      refetchApiDiningRoom();
    } catch (error) {
      ToastMessage('error', error.response.status === 500 ? 'Phòng bàn đã tồn tại' : 'Thêm phòng bàn thất bại');
    }
  };
  useEffect(() => {
    setValue('seat', dataModalUpdate?.seat);
    setValue('note', dataModalUpdate?.note);
    setValue('name', dataModalUpdate?.name);
    setValue('areaId', dataModalUpdate?.areaId);
  }, [dataModalUpdate]);
  return (
    <form onSubmit={handleSubmit(onSubmitUpdateDiningRoom)}>
      <Stack>
        <Box sx={styleFlex}>
          <RequireText title='Tên phòng bàn' sx={{ width: theme.restaurants.widthTitleInputControl }} />
          <ControllerInput control={control} name='name' />
        </Box>
        <Box sx={styleFlex}>
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
              defaultValue={areaItem?.name}
              variant='standard'
              name='areaId'
              control={control}
              path={pathFormController.area_name}
              listMenu={dataArea}
              titleMenu='Lựa chọn khu vực?'
              fontSize={theme.typography.font_14_base}
              sx={{ py: '2px' }}
            />
            <Box onClick={() => onModalAddArea()}>
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
          <ControllerInput control={control} name='note' startIcon={BorderColorIcon} sx={{ paddingLeft: '24px' }} />
        </Box>
        <Box sx={{ justifyContent: 'end', mt: 4, display: 'flex', gap: 2 }}>
          <Button type='submit' variant='contained' size='small' startIcon={<SaveIcon />}>
            Lưu
          </Button>
          <ButtomExitModal closeModal={offModalUpdate} />
        </Box>
      </Stack>
    </form>
  );
};
export default FormUpdateDiningRoom;

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
