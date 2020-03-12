import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { InfoblogService } from './infoblog.service';
import { Information } from '../infoblog.entity';

@Controller('infoblog')
export class InfoblogController {
  constructor(private infoservice: InfoblogService) {}
  @Get()
  index(): Promise<Information[]> {
    return this.infoservice.findAll();
  }

  @Post('create')
  async create(@Body() blogData: Information): Promise<any> {
    return this.infoservice.create(blogData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.infoservice.delete(id);
  }
}
