import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private Products = [
    { id: 1, name: 'Mobile', price: 20000 },
    { id: 2, name: 'Tablet', price: 40000 },
    { id: 3, name: 'Laptop', price: 80000 },
  ];

  getAllProducts() {
    return this.Products;
  }
  getProductById(id: number) {
    return this.Products.find((product) => product.id === id);
  }
}
