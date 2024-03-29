/* eslint-disable jsx-a11y/alt-text */
import { theme } from '@Core/Theme/theme';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { CoreTableActionDelete } from '@Core/components/table/CoreTableAction';
import { useQuery } from '@tanstack/react-query';
import color from '@Core/Theme/color';
import useModal from 'components/Hook/useModal';
import ToastMessage from 'components/Basic/ToastMessage';
import productService from 'services/productService';
import categoryService from 'services/categoryService';

const styleBox = { display: 'flex', gap: 3, boderBottom: `1px solid ${color.gray1}`, py: '8px' };
const styleTypography = {
  width: theme.restaurants.widthTitleInputControl,
  fontSize: theme.typography.font_14_medium
};

const DetailEating = () => {
  const { offModalDetail, onModalUpdate, dataModalDetail: eatingItem } = useModal();
  const { data: categoryEatingItem } = useQuery({
    queryKey: ['getCategoryItem'],
    queryFn: async () => {
      try {
        const res = await categoryService.getOne(eatingItem?.categoryId);
        return res.data;
      } catch (error) {}
      return true;
    }
  });
  const handleUpdateEating = () => {
    onModalUpdate({ eatingItem, categoryEatingItem });
    offModalDetail();
  };
  const handleDeleteEating = async () => {
    console.log(1);
    try {
      await productService.remove(eatingItem.id);
      ToastMessage('success', 'Xóa phòng bàn thành công');
      offModalDetail();
    } catch (error) {
      ToastMessage('error', 'Xóa phòng bàn thất bại');
    }
  };
  return (
    <Stack fontSize={theme.typography.font_14_base} sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
      <Box sx={{ border: '1px dashed #ccc', width: 120, height: 100, mt: 3 }}>
        <img width={'100%'} height={'100%'} src='https://static-kvfnb.kiotviet.vn/Content/WebMan/default-product-img.jpg' />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={styleBox}>
          <Typography sx={styleTypography}>Tên hàng hóa:</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>{eatingItem?.name}</Typography>
        </Box>
        <Box sx={styleBox}>
          <Typography sx={styleTypography}>Nhóm hàng:</Typography>
          <Typography>{categoryEatingItem?.name}</Typography>
        </Box>
        <Box sx={styleBox}>
          <Typography sx={styleTypography}>Tồn kho:</Typography>
          <Typography>{eatingItem?.quantity}</Typography>
        </Box>
        <Box sx={styleBox}>
          <Typography sx={styleTypography}>Giá bán:</Typography>
          <Typography>{Number(eatingItem?.price).toLocaleString()}</Typography>
        </Box>
        <Box sx={styleBox}>
          <Typography sx={styleTypography}>Giá Vốn:</Typography>
          <Typography>{Number(eatingItem?.cost).toLocaleString()}</Typography>
        </Box>
        <Box sx={styleBox}>
          <Typography sx={styleTypography}>Sự miêu tả:</Typography>
          <Typography>{eatingItem?.description}</Typography>
        </Box>

        <Box sx={{ justifyContent: 'end', mt: 4, display: 'flex', gap: 2 }}>
          <Button onClick={handleUpdateEating} variant='contained' size='small' startIcon={<SaveIcon />}>
            Cập nhập
          </Button>

          <CoreTableActionDelete btn={true} content='Vui lòng xác nhận xóa.' callback={handleDeleteEating} />
        </Box>
      </Box>
    </Stack>
  );
};

export default DetailEating;
