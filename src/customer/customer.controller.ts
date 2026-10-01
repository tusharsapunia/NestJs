import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service.js';
import { createCustomerDto } from './Dtos/customer.dto.js';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  //GET
  @Get()
  getAll() {
    return this.customerService.getCustomers();
  }

  //POST
  @Post()
  createOne(@Body() customerDto: createCustomerDto) {
    return this.customerService.createCustomer(customerDto);
  }
}
