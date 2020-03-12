import { Test, TestingModule } from '@nestjs/testing';
import { InfoblogController } from './infoblog.controller';

describe('Infoblog Controller', () => {
  let controller: InfoblogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoblogController],
    }).compile();

    controller = module.get<InfoblogController>(InfoblogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
