import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material';
import { useContext } from 'react';

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
};
export const ContextProgress = React.createContext();

function LoadingScreen({ children }) {
  const [progress, setProgress] = React.useState(false);
  return (
    <ContextProgress.Provider value={{ setProgress }}>
      <Modal sx={{ '&.MuiBackdrop-root': { opacity: '0.7' } }} open={progress}>
        <Box sx={style}>
          <StyleProgress />
        </Box>
      </Modal>
      {children}
    </ContextProgress.Provider>
  );
}

export const SetProgress = (boolean) => {
  const { setProgress } = useContext(ContextProgress);
  setProgress(boolean);
};

export default LoadingScreen;

const StyleProgress = styled(CircularProgress)(() => ({
  color: '#fff',
  backgroundColor: '#0070f4',
  borderRadius: '50%'
}));
