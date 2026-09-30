import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
     getEmployee(){
        return `<h1>Data found successfully from Employee Controller!!</h1>`
     }
}
