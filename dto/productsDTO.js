class ProductDTO {
  constructor({ id, title, price, category }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
  }
}

module.exports = ProductDTO;
