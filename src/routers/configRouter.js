/* eslint-disable no-sparse-arrays */

import Loaded from './components/Loaded';
import { lazy } from 'react';

const { default: DefaultLayout } = require('layout/DefaultLayout');
const { pathName } = require('utils/constants/pathName');
const Register = Loaded(lazy(() => import('pages/Register/Register')));
const Bill = Loaded(lazy(() => import('pages/Bill/Bill')));
const Account = Loaded(lazy(() => import('pages/DiningRoom/DiningRoom')));
const Eating = Loaded(lazy(() => import('pages/Eating/Eating')));
const Introduce = Loaded(lazy(() => import('pages/Introduce/Introduce')));
const Login = Loaded(lazy(() => import('pages/Login/Login')));
const Payroll = Loaded(lazy(() => import('pages/Payroll/Payroll')));
const Personnel = Loaded(lazy(() => import('pages/Personnel/Personnel')));
const Receptionist = Loaded(lazy(() => import('pages/Receptionist/Receptionist')));
const Timekeeping = Loaded(lazy(() => import('pages/Timekeeping/Timekeeping')));
const Cashier = Loaded(lazy(() => import('pages/Cashier/Cashier')));
const DiningRoom = Loaded(lazy(() => import('pages/DiningRoom/DiningRoom')));

export const configRouter = [
  {
    path: pathName.account,
    element: (
      <DefaultLayout>
        <Account />
      </DefaultLayout>
    )
  },
  {
    path: pathName.bill,
    element: (
      <DefaultLayout>
        <Bill />
      </DefaultLayout>
    )
  },
  {
    path: pathName.cashier,
    element: (
      <DefaultLayout>
        <Cashier />
      </DefaultLayout>
    )
  },
  {
    path: pathName.diningRoom,
    element: (
      <DefaultLayout>
        <DiningRoom />
      </DefaultLayout>
    )
  },
  {
    path: pathName.eating,
    element: (
      <DefaultLayout>
        <Eating />
      </DefaultLayout>
    )
  },
  {
    path: pathName.introduce,
    element: (
      <DefaultLayout>
        <Introduce />
      </DefaultLayout>
    )
  },
  {
    path: pathName.payroll,
    element: (
      <DefaultLayout>
        <Payroll />
      </DefaultLayout>
    )
  },
  {
    path: pathName.personnel,
    element: (
      <DefaultLayout>
        <Personnel />
      </DefaultLayout>
    )
  },
  {
    path: pathName.receptionist,
    element: (
      <DefaultLayout>
        <Receptionist />
      </DefaultLayout>
    )
  },
  {
    path: pathName.timekeeping,
    element: (
      <DefaultLayout>
        <Timekeeping />
      </DefaultLayout>
    )
  },
  {
    path: pathName.login,
    element: <Login />
  },
  {
    path: pathName.register,
    element: <Register />
  }
];
