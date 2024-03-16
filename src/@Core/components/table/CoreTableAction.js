import { Button, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useConfirm } from '../confirm/comfirm';

export const CoreTableActionDelete = ({ callback = () => {}, content = '', btn }) => {
  const confirm = useConfirm();
  const handleDelete = () => {
    confirm({
      content: content,
      isIcon: true,
      color: 'error',
      onOk: callback
    });
  };

  return (
    <Tooltip title='Xoá' sx={{ height: '21px' }}>
      <IconButton color='error' size='small' onClick={handleDelete}>
        {btn ? (
          <Button variant='contained' color='error' size='small' startIcon={<DeleteIcon />}>
            Xóa
          </Button>
        ) : (
          <DeleteIcon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export const CoreTableActionEdit = ({ callback = () => {} }) => {
  return (
    <Tooltip title='Sửa' sx={{ height: '21px' }}>
      <IconButton color='success' size='small' onClick={callback}>
        <RateReviewRoundedIcon />
      </IconButton>
    </Tooltip>
  );
};

export const CoreTableActionView = ({ callback = () => {} }) => {
  return (
    <Tooltip title='Xem chi tiết' sx={{ height: '21px' }}>
      <IconButton color='success' size='small' onClick={callback}>
        <RemoveRedEyeIcon />
      </IconButton>
    </Tooltip>
  );
};

export const CoreTableActionChangeStatus = ({ callback = () => {} }) => {
  return (
    <Tooltip title='Thay đổi trạng thái' sx={{ height: '21px' }}>
      <IconButton color='primary' onClick={callback}>
        <ShoppingCartRoundedIcon />
      </IconButton>
    </Tooltip>
  );
};
export const CoreTableActionCreate = ({ callback = () => {} }) => {
  return (
    <Tooltip title='Thêm mới'>
      <IconButton color='primary' onClick={callback}>
        <AddBoxIcon />
      </IconButton>
    </Tooltip>
  );
};
// icon thay đổi trạng thái Teacher
export const CoreTableActionSwitchStatus = ({ row, callback = (id) => {}, content = '' }) => {
  const confirm = useConfirm();
  const handleDelete = () => {
    confirm({
      content: content,
      isIcon: true,
      color: 'error',
      onOk: () => callback(row.original._id)
    });
  };
  return (
    <Tooltip title='Thay đổi trạng thái'>
      <IconButton color='error' onClick={handleDelete}>
        <HighlightOffOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
};
