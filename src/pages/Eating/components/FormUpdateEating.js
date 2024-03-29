/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import validateFormCreateEating from '../utils/validateFormCreateEating';
import useModal from 'components/Hook/useModal';
import productService from 'services/productService';
import ToastMessage from 'components/Basic/ToastMessage';
import CreateEatingLeft from './FormCreateEating/CreateEatingLeft';
import CreateEatingRight from './FormCreateEating/CreateEatingRight';
import ControllerCkeditor from '@Core/components/input/ControllerCkeditor';
import ButtomExitModal from 'components/Modal/ButtomExitModal';
import useApiGetAll from 'components/Hook/useApiGetAll';

const FormUpdateEating = () => {
  const { dataCategoryEating } = useApiGetAll();
  const {
    offModalUpdate,
    dataModalUpdate: { eatingItem, categoryEatingItem }
  } = useModal();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(validateFormCreateEating)
  });
  const handleUpdateEating = async (value) => {
    const category = dataCategoryEating.find((item) => value.categoryId === item.name);
    const newValue = { ...value, categoryId: category.id };
    try {
      productService.edit(eatingItem?.id, newValue);
      ToastMessage('success', 'Cập nhập khu vực thành công');
      offModalUpdate();
    } catch (error) {
      ToastMessage('success', 'Cập nhập khu vực thất bại');
    }
  };

  useEffect(() => {
    setValue('cost', eatingItem?.cost);
    setValue('name', eatingItem?.name);
    setValue('price', eatingItem?.price);
    setValue('description', eatingItem?.description || '');
    setValue('img', eatingItem?.img);
    setValue('quantity', eatingItem?.quantity);
    setValue('categoryId', categoryEatingItem?.name);
  }, []);
  return (
    <form onSubmit={handleSubmit(handleUpdateEating)}>
      <Stack>
        <Box sx={{ display: 'flex', gap: 7 }}>
          <CreateEatingLeft
            control={control}
            errors={errors}
            dataCategoryEating={dataCategoryEating}
            categoryEatingDefault={categoryEatingItem?.name}
          />
          <CreateEatingRight control={control} />
        </Box>
        <Box sx={{ mt: 3 }}>
          <ControllerCkeditor control={control} name={'description'} />
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

export default FormUpdateEating;
