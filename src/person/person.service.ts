import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import PersonRepository from './person.repository';
import { Person } from './entities/person.entity';
import { SearchPersonDto } from './dto/search-person.dto';

@Injectable()
export class PersonService {

  constructor(
    private readonly personRepository: PersonRepository
  ) { }


  public async create(createPersonDto: CreatePersonDto): Promise<Person>  {
    return await this.personRepository.insertPerson(createPersonDto);
  }

  public async searchPerson(filters: SearchPersonDto): Promise<Person[]>  {
    return await this.personRepository.selectManyPersonWithFilters(filters);
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
