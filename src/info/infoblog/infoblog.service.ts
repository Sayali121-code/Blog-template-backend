import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Information } from '../infoblog.entity';
import { Repository } from 'typeorm';
import { DeleteResult } from 'typeorm';

@Injectable()
export class InfoblogService {
  constructor(
    @InjectRepository(Information)
    private informationRepository: Repository<Information>,
  ) {}

  async findAll(): Promise<Information[]> {
    return await this.informationRepository.find();
  }
  async create(info: Information): Promise<Information> {
    // Refer entity name for
    return await this.informationRepository.save(info);
  }
  async delete(id): Promise<DeleteResult> {
    return await this.informationRepository.delete(id); //
  }
}
