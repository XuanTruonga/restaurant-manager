import axios from 'axios';

const createInstance = (baseUrl, middleware = () => {}) => {
  const options = {
    baseURL: baseUrl,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  };

  const instance = axios.create(options);

  instance.interceptors.request.use(
    // Bạn có thể thêm các bộ chặn vào một phiên bản tùy chỉnh của axios.
    async (requestConfig) => {
      await Promise.all(middleware(requestConfig));
      return requestConfig;
    },
    (requestError) => {
      return Promise.reject(requestError);
    }
  );

  instance.interceptors.response.use((response) => {
    if (response && response.data) {
      return response.data;
    } else {
      return response;
    }
  });

  return instance;
};

export default createInstance;
