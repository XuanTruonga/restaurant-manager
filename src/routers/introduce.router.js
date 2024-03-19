import React, { lazy } from 'react';
import { pathName } from 'utils/constants/pathName';
import Loaded from './components/Loaded';
const Introduce = Loaded(lazy(() => import('pages/Introduce/Introduce')));

const introduceRouter = { path: pathName.introduce,
    element: <Introduce />};

export default introduceRouter;
