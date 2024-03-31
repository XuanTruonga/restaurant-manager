import BaseService from '@Core/api/Basevice';

export const areaEndPoint = {
  base: 'area',
  create: 'create',
  find_on: 'by-id',
  update: 'update',
  delete: 'delete'
};

class AreaService extends BaseService {
  BASE_ENDPOINT = areaEndPoint.base;
  constructor(prams) {
    super(prams);
    this.setRequest(); 
  }
  add(data) {
    return this.post(areaEndPoint.create, data);
  }
  remove(id) {
    return this.delete(areaEndPoint.delete, id);
  }
  edit(id, data) {
    return this.update(areaEndPoint.update, id, data);
  }
  getAll() {
    return this.get();
  }
  getOne(id) {
    return this.find(areaEndPoint.find_on, id);
  }
}

const areaService = new AreaService({ baseEndpoint: areaEndPoint.base });
export default areaService;
