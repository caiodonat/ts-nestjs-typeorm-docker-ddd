import { Controller, Get, Post, Body, Param, Put, Req, Query } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { ApiTags } from '@nestjs/swagger';
import CreatePersonUseCase from './use-cases/CreatePersonUseCase';
import { SearchPersonDto } from './dto/search-person.dto';

@ApiTags('Person')
@Controller('person')
export class PersonController {
  constructor(
    private readonly personService: PersonService,
    private readonly createPersonUseCase: CreatePersonUseCase
  ) { }

  @Post()
  public postPerson(
    @Req() req: Request,
    @Body() createPersonDto: CreatePersonDto
  ) {
    const creatorId = req['user'];
    /// @todo Criar tipo para 'Retorno Caso de Uso'
    let responseUseCase: any;

    if (creatorId != undefined) {
      responseUseCase = this.createPersonUseCase.createByOtherPerson(createPersonDto, creatorId);
    } else {
      responseUseCase = this.createPersonUseCase.selfCreate(createPersonDto);
    }

    return responseUseCase;
  }

  @Get('search')
  public getPersonSearch(
    @Query() filters: SearchPersonDto
  ) {
    return this.personService.searchPerson(filters);
  }

  @Get(':id')
  public findPersonId(
    @Param('id') id: string
  ) {
    return this.personService.findOne(+id);
  }

  @Put(':id')
  public putPersonId(
    @Param('id') id: string,
    @Body() updatePersonDto: UpdatePersonDto
  ) {
    return this.personService.update(+id, updatePersonDto);
  }
}
