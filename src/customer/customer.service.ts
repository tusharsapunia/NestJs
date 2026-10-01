import { Injectable } from '@nestjs/common';
import { Customer } from './Interfaces/customer.interface.js';
import { createCustomerDto } from './Dtos/customer.dto.js';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];

  getCustomers(): Customer[] {
    return this.customers;
  }
  createCustomer(customerDto: createCustomerDto) {
    const newCustomer: Customer = {
      id: Date.now(),
      ...customerDto,
    };

    this.customers.push(newCustomer);
    return newCustomer;
  }
}
