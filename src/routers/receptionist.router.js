import { pathName } from 'utils/constants/pathName';
import Loaded from './components/Loaded';
import { lazy } from 'react';

const Receptionist = Loaded(lazy(() => import('pages/Receptionist/Receptionist')));

const receptionistRouter = {
    path: pathName.receptionist,
    element: <Receptionist />
}

export default receptionistRouter;
