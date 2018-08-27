import { Get, Controller, Response, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    root(@Response() res) {
        res.status(HttpStatus.OK).json('Welcome to Server API');
    }
  @Get('api')
    rootApi(@Response() res) {
        res.status(HttpStatus.OK).json('API Implementation');
    }
}