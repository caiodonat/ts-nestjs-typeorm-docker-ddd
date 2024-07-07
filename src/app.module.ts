import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PersonModule } from './person/person.module';
import configurations from './config/configurations';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './person/entities/person.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurations]
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'sqlite.db',
      synchronize: true,
      entities: [Person]
    }),
    PersonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
