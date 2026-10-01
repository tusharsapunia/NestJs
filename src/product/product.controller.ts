import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { AuthGuard } from '../guards/auth/auth.guard.js';

@Controller('product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Get()
  @UseGuards(AuthGuard)
  getProducts() {
    return this.ProductService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.ProductService.getProductById(Number(id));
  }
}
