import React, { Fragment } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { theme } from '@Core/Theme/theme';
import useModal from 'components/Hook/useModal';
import { CoreTableActionDelete } from '@Core/components/table/CoreTableAction';
import productService from 'services/productService';
import ToastMessage from 'components/Basic/ToastMessage';

const ControlTableEatingTop = ({ rowCheckBox }) => {
  const { onModalPrimary: onModalAddEating } = useModal();
  const rows = rowCheckBox?.rows;
  const handleDeleteEating = () => {
    rows?.map(async (item) => {
      try {
        await productService.remove(item.id);
        ToastMessage('success', 'Xóa hàng hóa thành công');
      } catch (error) {
        ToastMessage('success', 'Xóa hàng hóa thất bại');
      }
    });
  };
  return (
    <Box sx={{ pb: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography sx={{ fontSize: theme.typography.font_26_base, flexGrow: 1 }}>Hàng hóa</Typography>
      {''}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {rows?.length > 0 && (
          <Fragment>
            <Typography sx={{ mr: 2, fontSize: theme.typography.text_s }}>{`hàng hóa được chọn(${rows?.length})`}</Typography>
            <CoreTableActionDelete
              content={`Xác nhận xóa ${rows?.length} hàng hóa đã chọn.`}
              btn={true}
              bgcolor='#49a14b'
              callback={handleDeleteEating}
            />
          </Fragment>
        )}
        <Button
          onClick={() => onModalAddEating()}
          variant='contained'
          size='small'
          color='primary'
          sx={{ textWrap: 'nowrap', ml: 3 }}
          startIcon={<CreateNewFolderIcon />}>
          Thêm hàng hóa
        </Button>
      </Box>
    </Box>
  );
};

export default ControlTableEatingTop;
