import { Test, TestingModule } from '@nestjs/testing';
import { BurgerBuddyController } from './burger-buddy.controller';

describe('BurgerBuddyController', () => {
  let controller: BurgerBuddyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BurgerBuddyController],
    }).compile();

    controller = module.get<BurgerBuddyController>(BurgerBuddyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
