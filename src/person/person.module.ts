import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import PersonRepository from './person.repository';
import { PersonController } from './person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import CreatePersonUseCase from './use-cases/CreatePersonUseCase';

@Module({
  imports: [
    TypeOrmModule.forFeature([Person])
  ],
  controllers: [PersonController],
  providers: [
    PersonService,
    PersonRepository,
    CreatePersonUseCase,
  ],
})
export class PersonModule { }
