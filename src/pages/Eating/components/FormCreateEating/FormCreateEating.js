/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import ButtomExitModal from 'components/Modal/ButtomExitModal';
import ToastMessage from 'components/Basic/ToastMessage';
import useModal from 'components/Hook/useModal';
import validateFormCreateEating from '../../utils/validateFormCreateEating';
import CreateEatingRight from './CreateEatingRight';
import CreateEatingLeft from './CreateEatingLeft';
import ControllerCkeditor from '@Core/components/input/ControllerCkeditor';
import productService from 'services/productService';
import useApiGetAll from 'components/Hook/useApiGetAll';

const FormCreateEating = () => {
  const { dataCategoryEating, refetchApiEating } = useApiGetAll();
  const { offModalPrimary: offModalCreateEating } = useModal();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(validateFormCreateEating)
  });
  const onSubmitAddEating = async (value) => {
    const category = dataCategoryEating.find((item) => value.categoryId === item.name);
    const newValue = { ...value, categoryId: category.id };
    refetchApiEating();
    try {
      productService.add(newValue);
      ToastMessage('success', 'thêm hàng hóa thành công');
      offModalCreateEating();
    } catch (error) {
      ToastMessage('success', 'thêm hàng hóa thất bại');
    }
  };

  useEffect(() => {
    setValue('cost', 0);
    setValue('price', 0);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmitAddEating)}>
      <Stack>
        <Box sx={{ display: 'flex', gap: 7 }}>
          <CreateEatingLeft control={control} errors={errors} dataCategoryEating={dataCategoryEating} />
          <CreateEatingRight control={control} setValue={setValue} />
        </Box>
        <Box sx={{ mt: 3 }}>
          <ControllerCkeditor control={control} name={'description'} />
        </Box>
        <Box sx={{ justifyContent: 'end', mt: 4, display: 'flex', gap: 2 }}>
          <Button type='submit' variant='contained' size='small' startIcon={<SaveIcon />}>
            Lưu
          </Button>
          <ButtomExitModal closeModal={offModalCreateEating} />
        </Box>
      </Stack>
    </form>
  );
};

export default FormCreateEating;
