import React, { lazy } from 'react';
import { pathName } from 'utils/constants/pathName';
import Loaded from './components/Loaded';
const Eating = Loaded(lazy(() => import('pages/Eating/Eating')));

const eatingRouter = {
    path: pathName.eating,
    element: <Eating />
}

export default eatingRouter;
