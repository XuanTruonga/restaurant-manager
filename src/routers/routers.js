import { Typography } from '@mui/material';
import { configRouter } from './configRouter';
import Cashier from 'pages/Cashier/Cashier';

const { default: DefaultLayout } = require('layout/DefaultLayout');
const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
  {
    path: '',
    element: (
      <DefaultLayout>
        <Cashier />
      </DefaultLayout>
    )
    // children: [...configRouter]
  },
  ...configRouter,
  {
    path: '*',
    element: (
      <Typography variant='h4'>
        404 <br /> Trang wed không tồn tại
      </Typography>
    )
  }
]);

export default router;
