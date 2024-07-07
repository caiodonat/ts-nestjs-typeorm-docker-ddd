import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import PersonRepository from './person.repository';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Person])
  ],
  controllers: [PersonController],
  providers: [PersonService, PersonRepository],
})
export class PersonModule { }
