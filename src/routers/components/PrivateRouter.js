import UseAuth from 'components/Hook/useAuth';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const { isAuthenticated, isInitialized } = UseAuth();
  if (!isAuthenticated && isInitialized) {
    return children || <Outlet />;
  }
  return <Navigate to={'dang-nhap'} />;
};

export default PrivateRouter;
