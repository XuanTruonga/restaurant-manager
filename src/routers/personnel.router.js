import React, { lazy } from 'react';
import { pathName } from 'utils/constants/pathName';
import Loaded from './components/Loaded';
const Personnel = Loaded(lazy(() => import('pages/Personnel/Personnel')));

const personnelRouter =  {
    path: pathName.personnel,
    element: <Personnel />
}

export default personnelRouter;
