import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Tushar', age: 20 },
    { id: 2, name: 'Varun', age: 22 },
    { id: 3, name: 'Mohit', age: 23 },
  ];

  //Get methods
  getAll() {
    return this.students;
  }
  getById(id: number) {
    const student = this.students.find((elem) => elem.id === id);
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }
  //Post Method

  create(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }
  //Put Method

  update(id: number, body: { name: string; age: number }) {
    const index = this.students.findIndex((elem) => elem.id === id);

    if (index === -1) {
      throw new NotFoundException('Student Not found!');
    }
    const result = (this.students[index] = { id, ...body });
    return { message: 'Data Updated ', result: result };
  }

  //patch Method:-

  updateOne(id: number, body: Partial<{ name: string; age: number }>) {
    const studentData = this.getById(id);
    Object.assign(studentData, body);
    return studentData;
  }

  //Delete Method:-

  delete(id: number) {
    const index = this.students.findIndex((elem) => elem.id === id);
    if (index === -1) {
      throw new NotFoundException('Student Not found!');
    }
    const Delete = this.students.splice(index, 1);
    return { message: 'Student Data Deleted!', result: Delete };
  }
}
