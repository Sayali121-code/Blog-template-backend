import { Test, TestingModule } from '@nestjs/testing';
import { InfoblogService } from './infoblog.service';

describe('InfoblogService', () => {
  let service: InfoblogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InfoblogService],
    }).compile();

    service = module.get<InfoblogService>(InfoblogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
