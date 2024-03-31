import CoreConfirmProvider from '@Core/components/confirm/comfirm';
import LazyLoadingFullScreen from 'components/Basic/LoadingFullScreen';
import UseAuth from 'components/Hook/useAuth';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routers from 'routers/routers';
import CallApiProvider from 'useContext/ContextCallApi';

function App() {
  const { isInitialized } = UseAuth();
  if (!isInitialized) {
    return <LazyLoadingFullScreen />;
  }
  return (
    <>
      <CallApiProvider>
        <CoreConfirmProvider>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </CoreConfirmProvider>
        <ToastContainer />
      </CallApiProvider>
    </>
  );
}

export default App;
