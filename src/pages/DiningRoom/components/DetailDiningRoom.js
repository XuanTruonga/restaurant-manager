import { theme } from '@Core/Theme/theme';
import { Box, Button, Radio, Stack, Typography } from '@mui/material';
import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { CoreTableActionDelete } from '@Core/components/table/CoreTableAction';
import { useQuery } from '@tanstack/react-query';
import areaService from 'services/areaService';

import { handleDeleteDiningRoom, handleUpdateDiningRoom } from '../utils/handleDiningRoom';
import color from '@Core/Theme/color';
import useModal from 'components/Hook/useModal';
import useApiGetAll from 'components/Hook/useApiGetAll';

const styleBox = { display: 'flex', gap: 3, boderBottom: `1px solid ${color.gray1}`, py: '8px' };
const styleTypography = {
  width: theme.restaurants.widthTitleInputControl,
  fontSize: theme.typography.font_14_medium
};

const DetailDiningRoom = () => {
  const { offModalDetail, onModalUpdate, dataModalDetail } = useModal();
  const { refetchApiDiningRoom } = useApiGetAll();
  const { data: areaItem } = useQuery({
    queryKey: ['getDataAreaItem'],
    queryFn: async () => {
      try {
        const res = await areaService.getOne(dataModalDetail?.areaId);
        return res.data;
      } catch (error) {}
      return true;
    }
  });

  return (
    <Stack fontSize={theme.typography.font_14_base}>
      <Box sx={styleBox}>
        <Typography sx={styleTypography}>Tên phòng bàn:</Typography>
        <Typography sx={{ fontWeight: 'bold' }}>{dataModalDetail?.name}</Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={styleTypography}>Số ghế:</Typography>
        <Typography>{dataModalDetail?.seat}</Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={styleTypography}>Ghi chú:</Typography>
        <Typography>{dataModalDetail?.note}</Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography sx={styleTypography}>Khu vực:</Typography>
        <Typography>{areaItem?.name}</Typography>
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
          <Typography>{!dataModalDetail?.status ? 'đang hoạt động' : 'ngừng hoạt động'}</Typography>
        </Box>
      </Box>
      <Box sx={{ justifyContent: 'end', mt: 4, display: 'flex', gap: 2 }}>
        <Button
          onClick={() => handleUpdateDiningRoom(onModalUpdate, offModalDetail, dataModalDetail)}
          variant='contained'
          size='small'
          startIcon={<SaveIcon />}>
          Cập nhập
        </Button>
        {/* {!dataModalDetail?.status ? (
          <Button
            onClick={() => handleDisabledDinningRoom(dataModalDetail, offModalDetail)}
            variant='contained'
            size='small'
            startIcon={<CheckBoxIcon />}>
            Ngưng hoạt động
          </Button>
        ) : (
          <Button
            onClick={() => handleActiveDinningRoom(dataModalDetail, offModalDetail)}
            variant='contained'
            size='small'
            startIcon={<CheckBoxIcon />}>
            Cho phép hoạt động
          </Button>
        )} */}
        <CoreTableActionDelete
          btn={true}
          content='Vui lòng xác nhận xóa.'
          callback={() => handleDeleteDiningRoom(dataModalDetail, offModalDetail, refetchApiDiningRoom)}
        />
      </Box>
    </Stack>
  );
};

export default DetailDiningRoom;
