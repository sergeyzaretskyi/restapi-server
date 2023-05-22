import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BurgerBuddyModule } from './burger-buddy/burger-buddy.module';

@Module({
  imports: [BurgerBuddyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
