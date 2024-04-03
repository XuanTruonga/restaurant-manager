import { useSearchParams } from 'react-router-dom';

const useSearchParamsHook = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);

  const setParams = (key, value) => {
    params[key] = value;

    return setSearchParams(params);
  };

  
  return {
    searchParams: params,
    setParams,
    setSearchParams,
  };
};

export default useSearchParamsHook;
