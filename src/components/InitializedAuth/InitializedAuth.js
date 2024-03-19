/* eslint-disable react-hooks/exhaustive-deps */
import UseAuth from 'components/Hook/useAuth';
import { useEffect } from 'react';

const InitializedAuth = ({ children }) => {
  const { getUser } = UseAuth();
  useEffect(() => {
    getUser();
  }, []);
  return children;
};

export default InitializedAuth;
