import { Module } from '@nestjs/common';
import { InfoblogService } from './infoblog/infoblog.service';
import { InfoblogController } from './infoblog/infoblog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Information } from '../info/infoblog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Information])],
  providers: [InfoblogService],
  controllers: [InfoblogController],
})
export class InfoModule {}
