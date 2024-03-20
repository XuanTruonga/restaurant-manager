import { theme } from '@Core/Theme/theme';
import { Box, Button, Radio, Stack, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalSelectorDetail } from '../../../redux/selectors';
import color from '@Core/Theme/color';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { closeModalDetail } from '../../../redux/SliceModalDetail';
import { openModalUpdate } from '../../../redux/SliceModalUpdate';
import { CoreTableActionDelete } from '@Core/components/table/CoreTableAction';

const styleBox = { display: 'flex', gap: 3, boderBottom: `1px solid ${color.gray1}`, py: '8px' };
const styleTypography = {
  width: theme.restaurants.widthTitleInputControl,
  fontSize: theme.typography.font_14_medium
};

const DetailDiningRoom = () => {
  const { data } = useSelector(modalSelectorDetail);
  const dispath = useDispatch();

  const handleUpdateDiningRoom = () => {
    dispath(closeModalDetail());
    dispath(openModalUpdate(data));
  };
  return (
    <Stack fontSize={theme.typography.font_14_base}>
      <Box sx={styleBox}>
        <Typography sx={styleTypography}>Tên phòng bàn:</Typography>
        <Typography sx={{ fontWeight: 'bold' }}>{data.diningRoom}</Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={styleTypography}>Số ghế:</Typography>
        <Typography>{data.quantitySeats}</Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={styleTypography}>Ghi chú:</Typography>
        <Typography>{data.note}</Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={styleTypography}>Khu vực:</Typography>
        <Typography>{data.area}</Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={styleTypography}>Trạng thái:</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Radio
            color='success'
            checked
            sx={{
              p: 0,
              '& .MuiSvgIcon-root': {
                fontSize: 16
              }
            }}
          />
          <Typography>{data?.status ? 'đang hoạt động' : 'ngừng hoạt động'}</Typography>
        </Box>
      </Box>
      <Box sx={{ justifyContent: 'end', mt: 4, display: 'flex', gap: 2 }}>
        <Button onClick={handleUpdateDiningRoom} variant='contained' size='small' startIcon={<SaveIcon />}>
          Cập nhập
        </Button>
        {data?.status ? (
          <Button variant='contained' size='small' startIcon={<CheckBoxIcon />}>
            Ngưng hoạt động
          </Button>
        ) : (
          <Button variant='contained' size='small' startIcon={<CheckBoxIcon />}>
            Cho phép hoạt động
          </Button>
        )}
        <CoreTableActionDelete btn={true} content='Vui lòng xác nhận xóa.' />
      </Box>
    </Stack>
  );
};

export default DetailDiningRoom;
