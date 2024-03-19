import UseAuth from 'components/Hook/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRouter = ({ children }) => {
  const { isAuthenticated } = UseAuth();

  if (isAuthenticated) {
    return <Navigate to='/' replace />;
  }
  return children || <Outlet />;
};

export default PublicRouter;
