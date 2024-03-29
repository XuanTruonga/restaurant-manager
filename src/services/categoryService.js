const { default: BaseService } = require('@Core/api/Basevice');

const categoryEndPoint = {
  base: 'category',
  create: 'create',
  find_on: 'by-id',
  update: 'update',
  delete: 'delete'
};

class CategoryService extends BaseService {
  BASE_ENDPOINT = categoryEndPoint.base;
  constructor(prams) {
    super(prams);
    this.setRequest();
  }
  add(data) {
    return this.post(categoryEndPoint.create, data);
  }
  remove(id) {
    return this.delete(categoryEndPoint.delete, id);
  }
  edit(id, data) {
    console.log(id, data);
    return this.update(categoryEndPoint.update, id, data);
  }
  getAll() {
    return this.get();
  }
  getOne(id) {
    return this.find(categoryEndPoint.find_on, id);
  }
}

const categoryService = new CategoryService({ baseEndpoint: categoryEndPoint.base });
export default categoryService;
