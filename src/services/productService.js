import BaseService from '@Core/api/Basevice';

export const productEndPoint = {
  base: 'product',
  create: 'create',
  find_on: 'by-id',
  update: 'update',
  delete: 'delete'
};

class ProductService extends BaseService {
  constructor(prams) {
    super(prams);
    this.setRequest();
  }
  add(data) {
    return this.post(productEndPoint.create, data);
  }
  remove(id) {
    return this.delete(productEndPoint.delete, id);
  }
  edit(id, data) {
    return this.update(productEndPoint.update, id, data);
  }
  getAll(prams) {
    return this.get(prams);
  }
  getOne(id) {
    return this.find(productEndPoint.find_on, id);
  }
}
const productService = new ProductService({ baseEndpoint: productEndPoint.base });
export default productService;
