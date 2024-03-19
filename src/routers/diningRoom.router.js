import React, { lazy } from 'react';
import { pathName } from 'utils/constants/pathName';
import Loaded from './components/Loaded';
const DiningRoom = Loaded(lazy(() => import('pages/DiningRoom/DiningRoom')));

const diningRoomRouter =  {
    path: pathName.diningRoom,
    element: <DiningRoom />
}

export default diningRoomRouter;
