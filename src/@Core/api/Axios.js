import httpStatusCode from '@App/configs/httpStatusCode';
import authService, { authEndpoint } from '@App/services/auth.service';
import axios from 'axios';
import queryString from 'query-string';

const createInstance = (baseUrl, middleware = () => {}) => {
   const options = {
      baseURL: baseUrl,
      withCredentials: true, //  cho biết liệu có yêu cầu Kiểm soát truy cập chéo trang hay không 
      //nên được thực hiện bằng thông tin đăng nhập
      
      headers: {
         'X-Requested-With': 'XMLHttpRequest'
      },
      paramsSerializer: { // là một cấu hình tùy chọn cho phép bạn tùy chỉnh việc tuần tự hóa `params`.

         serializer: (params) => { // custem
            return queryString.stringify(params); // Để sử dụng trình duyệt, gói này nhắm đến phiên bản mới nhất của Chrome, Firefox và Safari.
         }
      }
   };

   const instance = axios.create(options);

   instance.interceptors.request.use( // Bạn có thể thêm các bộ chặn vào một phiên bản tùy chỉnh của axios.
      async (requestConfig) => {
         await Promise.all(middleware(requestConfig));
         return requestConfig;
      },
      (requestError) => {
         return Promise.reject(requestError); 
      }
   );

   instance.interceptors.response.use(
      (response) => {
         if (response && response.data) {
            return response.data;
         } else {
            return response;
         }
      },
      async (error) => {
         const originalRequest = error.config;
         const { url } = originalRequest;
         // Kiểm tra xem lỗi có phải do token hết hạn hay không
         if (
            httpStatusCode.UNAUTHORIZED === error?.response?.status &&
            url !== authEndpoint.base + '/' + authEndpoint.refestToken &&
            !originalRequest._retry
         ) {
            originalRequest._retry = true;
            try {
               await authService.refeshToken();
               // Gửi lại request đã bị gián đoạn với token mới
               return instance(originalRequest);
            } catch (error) {
               return Promise.reject(error);
            }
            // Lấy token mới
         }
         return Promise.reject(error);
      }
   );

   return instance;
};

export default createInstance;