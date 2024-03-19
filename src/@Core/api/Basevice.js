import middlewares from './Middleware';
import createInstance from './Axios';

class BaseService {
  BASE_URL = process.env.REACT_APP_BASE_URL;

  BASE_ENDPOINT = '';

  DEFAULT_LIMIT = 10;

  DEFAULT_PAGE = 1;

  PRIMARY_KEY = 'id';

  DEFAULT_SORT = 'createdAt -1';

  ALL_MIDDLEWARES = {
    ...middlewares
  };
  constructor(props) {
    this.BASE_ENDPOINT = props.baseEndpoint;
    this.setRequest();
  }

  /**
   * @param {AxiosRequestConfig} requestConfig
   * @returns
   */
  middleware = (requestConfig) => {
    const arr = Object.values(this.ALL_MIDDLEWARES).map((m) => {
      if (typeof m === 'function') {
        return m(requestConfig);
      }

      return m;
    });
    return arr;
  };

  setRequest() {
    this.request = createInstance(this.BASE_URL, this.middleware);

    this.requestParams = {
      page_index: this.DEFAULT_PAGE,
      page_size: this.DEFAULT_LIMIT,
      sort: this.DEFAULT_SORT
    };
  }

  /**
   * @param {Object} query
   * @returns
   */
  list = (query = {}) => {
    const params = {
      ...this.requestParams,
      ...query
    };
    return this.request.get(this.BASE_ENDPOINT, { params });
  };

  /**
   * @param {string} id
   * @returns
   */
  find = (id) => {
    const url = `${this.BASE_ENDPOINT}/${id}`;
    return this.request.get(url);
  };

  /**
   * @param {Object} data
   * @returns
   */
  create = (data) => {
    return this.request.post(this.BASE_ENDPOINT, data);
  };
  post(enpoint, data) {
    return this.request.post(this.BASE_ENDPOINT + '/' + enpoint, data);
  }

  get(enpoint='', params = {}) {
    return this.request.get(this.BASE_ENDPOINT + enpoint, params);
  }

  /**
   * @param {Object} data
   * @returns
   */
  update = (data, id, method = 'put') => {
    if (id) {
      return this.request[method](`${this.BASE_ENDPOINT}/${id}`, data);
    }
    return this.request[method](`${this.BASE_ENDPOINT}/${data[this.PRIMARY_KEY]}`, data);
  };
  /**
   * @param {Object} data
   * @returns
   */
  save = (data) => {
    if (data.hasOwnProperty(this.PRIMARY_KEY) && data[this.PRIMARY_KEY]) {
      return this.update(data);
    } else {
      return this.create(data);
    }
  };

  /**
   * @param {string} id
   * @returns
   */
  delete = (id) => {
    return this.request.delete(this.BASE_ENDPOINT + '/' + id);
  };
}

export default BaseService;
