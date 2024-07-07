import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller()
@ApiExcludeController()
export class AppController {
  constructor(private readonly appService: AppService) { }
  
  @Get()
  getRoot(
    @Res() res: Response
  ) {
    return res.redirect('/swagger');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
