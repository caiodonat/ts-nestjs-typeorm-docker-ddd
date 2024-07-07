import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import PersonRepository from './person.repository';

@Injectable()
export class PersonService {

  constructor(
    private readonly personRepository: PersonRepository
  ) { }


  public async create(createPersonDto: CreatePersonDto) {
    return await this.personRepository.insertPerson(createPersonDto);
  }

  public async findAll() {
    return await this.personRepository.selectAllPerson();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
