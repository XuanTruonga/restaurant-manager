import BaseService from '@Core/api/Basevice';

export const authEndPoint = {
  base: 'auth',
  sigin: 'sign-in',
  create: 'create',
  getOne: 'by-id',
  update: 'update',
  verifyToken: '/verify-token'
};
class UserService extends BaseService {
  BASE_ENDPOINT = authEndPoint.base;
  constructor(prams) {
    super(prams);
    this.setRequest();
  }
  sigin(data) {
    return this.post(data, authEndPoint.sigin);
  }
  verifyToken() {
    return this.get(authEndPoint.verifyToken);
  }
  getAll() {
    return this.get();
  }
  register(data) {
    return this.create(data);
  }
}
const authService = new UserService({ baseEndpoint: authEndPoint.base });
export default authService;
