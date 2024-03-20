import { Typography } from '@mui/material';
import Cashier from 'pages/Cashier/Cashier';
import accountRouter from './account.router';
import billRouter from './bill.router';
import diningRoomRouter from './diningRoom.router';
import eatingRouter from './eating.router';
import introduceRouter from './introduce.router';
import payrollRouter from './payroll.router';
import personnelRouter from './personnel.router';
import timekeepingRouter from './timekeeping.router';
import { useRoutes } from 'react-router-dom';
import PublicRouter from './components/PublicRouter';
import PrivateRouter from './components/PrivateRouter';
import Login from 'pages/Login/Login';
import { pathName } from 'utils/constants/pathName';
import Register from 'pages/Register/Register';
import DefaultLayout from 'layout/defaultLayout';
import Receptionist from 'pages/Receptionist/Receptionist';

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
        element: <Receptionist />
      },
      accountRouter,
      billRouter,
      diningRoomRouter,
      eatingRouter,
      introduceRouter,
      payrollRouter,
      personnelRouter,
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
    path: pathName.cashier,
    element: (
      <PrivateRouter>
        <Cashier />
      </PrivateRouter>
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
