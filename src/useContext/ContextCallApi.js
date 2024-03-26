import React, { createContext, useContext } from 'react';
import { useState } from 'react';

export const ContextCallApi = createContext();

const CallApiProvider = ({ children }) => {
  const [api, setApi] = useState();
  const callApi = () => {
    setApi(Math.random() * 2);
  };
  return <ContextCallApi.Provider value={{ api, callApi }}>{children}</ContextCallApi.Provider>;
};

export default CallApiProvider;

export const useCallApi = () => {
  const { api, callApi } = useContext(ContextCallApi);
  return {
    api,
    callApi
  };
};
