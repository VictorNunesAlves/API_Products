const Product = require('../models/Products');

class ProductService {
  async getAll() {
    return await Product.findAll({ raw: true });
  }

  async getById(id) {
    return await Product.findOne({ raw: true, where: { id } });
  }

  async create(data) {
    return await Product.create(data);
  }

  async update(id, data) {
    return await Product.update(data, { where: { id } });
  }

  async delete(id) {
    return await Product.destroy({ where: { id } });
  }
}

module.exports = new ProductService();
