import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service.js';

@Controller('product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get()
  getProducts() {
    
    return this.ProductService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.ProductService.getProductById(Number(id));
  }
}
