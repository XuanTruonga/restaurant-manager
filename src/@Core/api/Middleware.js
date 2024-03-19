/* eslint-disable import/no-anonymous-default-export */
const excludeAuthenApi = [];
const withAuthToken = async (requestConfig) => {
  const { url } = requestConfig;

  if (url.includes(excludeAuthenApi)) {
    const authToken = JSON.parse(localStorage.getItem('authToken'));
    if (authToken) {
      requestConfig.headers.Authorization = `Bearer ${authToken}`;
      return requestConfig;
    }

    return requestConfig;
  }

  return requestConfig;
};

export default {
  auth: withAuthToken
};
