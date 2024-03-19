/* eslint-disable react-hooks/exhaustive-deps */

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  Typography,
  styled
} from '@mui/material';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { createContext, useCallback, useContext, useState } from 'react';
import BlockIcon from '@mui/icons-material/Block';
import LoadingButton from '@mui/lab/LoadingButton';

const ConfirmContext = createContext();

export const useConfirm = () => {
  const confirm = useContext(ConfirmContext);
  return confirm;
};

const CoreConfirmProvider = (props) => {
  const [configs, setConfigs] = useState({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const confirm = useCallback(
    (configs) => {
      setConfigs(configs);
      setOpen(true);
    },
    [configs]
  );
  const handleClose = () => {
    setOpen(false);
  };

  const hanldeOk = async () => {
    if (configs?.callback) {
      setLoading(true);
      try {
        await configs.callback();
      } catch (error) {
        console.error('Error during callback:', error);
      }
      setLoading(false);
      handleClose();
    }
  };

  return (
    <ConfirmContext.Provider value={confirm}>
      {props.children}
      <Dialog
        open={open}
        PaperComponent={StyledPaper}
        keepMounted
        onClose={handleClose}
        maxWidth='sm'
        sx={{ zIndex: 2000 }}>
        {configs?.title && (
          <DialogTitle
            className='text-center'
            sx={{ '& .MuiTypography-root ': { fontSize: '15px', fontWeight: '600' } }}>
            {configs?.title}
          </DialogTitle>
        )}
        {configs?.content && (
          <DialogContent sx={{ fontSize: '15px', display: 'flex', alignItems: 'center' }}>
            {configs?.isIcon && (configs?.icon ?? <DeleteForeverRoundedIcon fontSize='large' color='error' />)}
            <Typography>{configs?.content}</Typography>
          </DialogContent>
        )}
        <Divider sx={{ margin: '10px' }} />
        <DialogActions sx={{ gap: 1 }}>
          <Button
            onClick={handleClose}
            variant='contained'
            size='small'
            color='secondary'
            startIcon={<BlockIcon />}>
            Bỏ qua
          </Button>
          <LoadingButton
            variant='contained'
            loading={loading}
            className='text-white'
            color={configs.color ? configs.color : 'primary'}
            onClick={() => {
              hanldeOk();
            }}
            size='small'>
            {configs?.confirmOk ?? 'Xác nhận'}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </ConfirmContext.Provider>
  );
};
const StyledPaper = styled(Paper)`
  padding: 6px;
  min-width: 25rem;
  max-width: 100%;
`;
export default CoreConfirmProvider;
