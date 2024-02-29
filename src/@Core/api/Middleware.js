/* eslint-disable import/no-anonymous-default-export */
const excludeAuthenApi = [];
const withAuthToken = async (requestConfig) => {
   const { url } = requestConfig;

   if (url.includes(excludeAuthenApi)) {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
         // requestConfig.headers.Authorization = `Bearer ${authToken}`;
         // requestConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
         return requestConfig;
      }

      return requestConfig;
   }

   return requestConfig;
};

export default {
   auth: withAuthToken
};
