import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service.js';

@Controller('student')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}

  //GET API:-
  @Get()
  getAll() {
    return this.StudentService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.StudentService.getById(Number(id));
  }

  //POST API:-
  @Post()
  create(@Body() body: { name: string; age: number }) {
    return this.StudentService.create(body);
  }

  //PUT API:-
  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string; age: number }) {
    return this.StudentService.update(Number(id), body);
  }

  //Patch API:-
  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() body: Partial<{ name: string; age: number }>,
  ) {
    return this.StudentService.updateOne(Number(id), body);
  }

  //DELETE API:-

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.StudentService.delete(Number(id));
  }
}
