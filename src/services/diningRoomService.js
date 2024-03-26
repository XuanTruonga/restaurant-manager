import BaseService from '@Core/api/Basevice';

export const diningRoomEndPoint = {
  base: 'table',
  create: 'create',
  find_on: 'by-id',
  update: 'update',
  delete: 'delete'
};

class DiningRoomService extends BaseService {
  constructor(prams) {
    super(prams);
    this.setRequest();
  }
  add(data) {
    return this.post(diningRoomEndPoint.create, data);
  }
  remove(id) {
    return this.delete(diningRoomEndPoint.delete, id);
  }
  edit(id, data) {
    return this.update(diningRoomEndPoint.update, id, data);
  }
  getAll() {
    return this.get();
  }
  getOne(id) {
    return this.find(diningRoomEndPoint.find_on, id);
  }
}
const diningRoomService = new DiningRoomService({ baseEndpoint: diningRoomEndPoint.base });
export default diningRoomService;
