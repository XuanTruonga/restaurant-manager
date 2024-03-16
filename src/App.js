import CoreConfirmProvider from '@Core/components/confirm/comfirm';
import { RouterProvider } from 'react-router-dom';
import router from 'routers/routers';

function App() {
  return (
    <div>
      <CoreConfirmProvider>
        <RouterProvider router={router} />
      </CoreConfirmProvider>
    </div>
  );
}

export default App;
