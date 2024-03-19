import React, { lazy } from 'react';
import Loaded from './components/Loaded';
import { pathName } from 'utils/constants/pathName';
const Cashier = Loaded(lazy(() => import('pages/Cashier/Cashier')));

const cashierRouter =  {
    path: pathName.cashier,
    element: <Cashier />
}

export default cashierRouter;
