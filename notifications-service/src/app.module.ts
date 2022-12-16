import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';
import { MessagingModule } from '@infra/messaging/messaging.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    DatabaseModule,
    MessagingModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
