import { pathName } from 'utils/constants/pathName';
import Loaded from './components/Loaded';
import { lazy } from 'react';

const Payroll = Loaded(lazy(() => import('pages/Payroll/Payroll')));

const payrollRouter =  {
    path: pathName.payroll,
    element: <Payroll />
}

export default payrollRouter;
