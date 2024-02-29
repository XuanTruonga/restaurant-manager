import Register from 'pages/Register/Register';
import Account from 'pages/Account/Account';
import Bill from 'pages/Bill/Bill';
import Cashier from 'pages/Cashier/Cashier';
import DiningRoom from 'pages/DiningRoom/DiningRoom';
import Eating from 'pages/Eating/Eating';
import Introduce from 'pages/Introduce/Introduce';
import Login from 'pages/Login/Login';
import Payroll from 'pages/Payroll/Payroll';
import Personnel from 'pages/Personnel/Personnel';
import Receptionist from 'pages/Receptionist/Receptionist';
import Timekeeping from 'pages/Timekeeping/Timekeeping';

/* eslint-disable no-sparse-arrays */
const { default: DefaultLayout } = require('layout/DefaultLayout');
const { pathName } = require('utils/constants/pathName');

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
