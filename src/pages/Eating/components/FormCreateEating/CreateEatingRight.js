/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import { theme } from '@Core/Theme/theme';
import ControllerInput from '@Core/components/input/ControllerInput';
import { Box, Typography, styled } from '@mui/material';
import RequireText from 'components/Basic/RequireText';
import React from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const CreateEatingRight = (props) => {
  const { control } = props;

  return (
    <Box>
      <WrapperControll>
        <Typography sx={styleTitleInput}>Giá vốn</Typography>
        <ControllerInput control={control} name='cost' startIcon={BorderColorIcon} sx={{ paddingLeft: '22px' }} />
      </WrapperControll>
      <WrapperControll>
        <RequireText title='Giá bán' sx={{ width: theme.restaurants.widthTitleInputControl }} />
        <ControllerInput control={control} name='price' startIcon={BorderColorIcon} sx={{ paddingLeft: '22px' }} />
      </WrapperControll>
      <WrapperControll>
        <input type='file' onChange={(e) => console.log(window.URL.createObjectURL(e.target.files[0]))} />
      </WrapperControll>
      <Box sx={{ border: '1px dashed #ccc', width: 100, height: 80, mt: 3 }}>
        <img width={'100%'} height={'100%'} src='https://static-kvfnb.kiotviet.vn/Content/WebMan/default-product-img.jpg' />
      </Box>
    </Box>
  );
};

export default CreateEatingRight;

const WrapperControll = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.typography.font_14_base,
  gap: '16px',
  marginTop: '14px'
}));

const styleTitleInput = {
  fontWeight: '700',
  textWrap: 'nowrap',
  width: theme.restaurants.widthTitleInputControl
};
