import { Typography } from '@mui/material';
import Cashier from 'pages/Cashier/Cashier';
import accountRouter from './account.router';
import billRouter from './bill.router';
import cashierRouter from './cashier.router';
import diningRoomRouter from './diningRoom.router';
import eatingRouter from './eating.router';
import introduceRouter from './introduce.router';
import payrollRouter from './payroll.router';
import personnelRouter from './personnel.router';
import receptionistRouter from './receptionist.router';
import timekeepingRouter from './timekeeping.router';
import { useRoutes } from 'react-router-dom';
import PublicRouter from './components/PublicRouter';
import PrivateRouter from './components/PrivateRouter';
import Login from 'pages/Login/Login';
import { pathName } from 'utils/constants/pathName';
import Register from 'pages/Register/Register';

const { default: DefaultLayout } = require('layout/DefaultLayout');

const routers = [
  {
    path: '/',
    element: (
      <PrivateRouter>
        <DefaultLayout />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <Cashier />
      },
      accountRouter,
      billRouter,
      cashierRouter,
      diningRoomRouter,
      eatingRouter,
      introduceRouter,
      payrollRouter,
      personnelRouter,
      receptionistRouter,
      timekeepingRouter
    ]
  },
  {
    path: pathName.login,
    element: (
      <PublicRouter>
        <Login />
      </PublicRouter>
    )
  },
  {
    path: pathName.register,
    element: (
      <PublicRouter>
        <Register />
      </PublicRouter>
    )
  },
  {
    path: '*',
    element: (
      <Typography variant='h4'>
        404 <br /> Trang wed không tồn tại
      </Typography>
    )
  }
];

export default function Routers() {
  return useRoutes(routers);
}
