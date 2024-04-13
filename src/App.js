import CoreConfirmProvider from '@Core/components/confirm/comfirm';
import LazyLoadingFullScreen from 'components/Basic/LoadingFullScreen';
import UseAuth from 'components/Hook/useAuth';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routers from 'routers/routers';
import LoadingScreen from 'useContext/LoadingScreen';

function App() {
  const { isInitialized } = UseAuth();
  if (!isInitialized) {
    return <LazyLoadingFullScreen />;
  }
  return (
    <>
      <LoadingScreen>
        <CoreConfirmProvider>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </CoreConfirmProvider>
        <ToastContainer autoClose='1200' />
      </LoadingScreen>
    </>
  );
}

export default App;
