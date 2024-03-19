import { pathName } from 'utils/constants/pathName';
import Loaded from './components/Loaded';
import { lazy } from 'react';

const Bill = Loaded(lazy(() => import('pages/Bill/Bill')));

const billRouter = {
    path: pathName.bill,
    element: <Bill />
}

export default billRouter;
