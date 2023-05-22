import { Module } from '@nestjs/common';
import { BurgerBuddyController } from './burger-buddy.controller';

@Module({
  controllers: [BurgerBuddyController],
})
export class BurgerBuddyModule {}
