import { lazy } from 'react';
import Loaded from './components/Loaded';
import { pathName } from 'utils/constants/pathName';

const Account = Loaded(lazy(() => import('pages/Account/Account')));

const accountRouter = { path: pathName.account, element: <Account /> };

export default accountRouter;
