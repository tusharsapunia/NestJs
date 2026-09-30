import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getuser(){
        return `<h1> Hello From user controller...!!!</h1>`
    }
}
