import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>Hello World! , 01-my-nest-project</h1>`;
  }
}
