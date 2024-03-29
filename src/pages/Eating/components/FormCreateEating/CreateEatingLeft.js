import color from '@Core/Theme/color';
import { theme } from '@Core/Theme/theme';
import ControllerInput from '@Core/components/input/ControllerInput';
import ControllerSelect from '@Core/components/input/ControllerSelect';
import { Box, styled } from '@mui/material';
import RequireText from 'components/Basic/RequireText';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import pathFormController from 'utils/constants/pathFormController';
import useModal from 'components/Hook/useModal';

const CreateEatingLeft = (props) => {
  const { control, errors, dataCategoryEating, categoryEatingDefault } = props;
  const { onModalSecondary: modalAddCategoryEating } = useModal();

  return (
    <Box sx={{ width: '60%' }}>
      <WrapperControll>
        <RequireText title='Tên hàng hóa' sx={{ width: theme.restaurants.widthTitleInputControl }} />
        <ControllerInput control={control} name='name' />F
      </WrapperControll>

      <WrapperControll sx={{ mt: '8px' }}>
        <RequireText title='Nhóm hàng' sx={{ width: theme.restaurants.widthTitleInputControl }} />
        <Box
          flexGrow={1}
          sx={
            errors?.categoryId?.message
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
            defaultValue={categoryEatingDefault}
            variant='standard'
            name='categoryId'
            control={control}
            path={pathFormController.category_name}
            listMenu={dataCategoryEating}
            titleMenu='Lựa chọn nhóm hàng hóa?'
            fontSize={theme.typography.font_14_base}
            sx={{ py: '2px' }}
          />
          <Box onClick={() => modalAddCategoryEating()}>
            <AddIcon sx={errors?.categoryId?.message ? { ...styleAddIcon, mb: '-1px' } : { ...styleAddIcon }} />
          </Box>
        </Box>
        <Box></Box>
      </WrapperControll>

      <WrapperControll>
        <RequireText title='Số lượng hàng hóa' sx={{ width: theme.restaurants.widthTitleInputControl }} />
        <ControllerInput control={control} name='quantity' />
      </WrapperControll>
    </Box>
  );
};

export default CreateEatingLeft;

const WrapperControll = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.typography.font_14_base,
  gap: '16px',
  marginTop: '12px'
}));

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
