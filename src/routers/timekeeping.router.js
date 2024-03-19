import { lazy } from 'react';
import Loaded from './components/Loaded';
import { pathName } from 'utils/constants/pathName';

const Timekeeping = Loaded(lazy(() => import('pages/Timekeeping/Timekeeping')));

const timekeepingRouter =  { path: pathName.timekeeping,
    element: <Timekeeping />};

export default timekeepingRouter;
