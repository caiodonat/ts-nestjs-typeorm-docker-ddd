import { CreatePersonDto } from "../dto/create-person.dto";
import { Person } from "../entities/person.entity";
import { PersonService } from "../person.service";

export default class CreatePersonUseCase {

	constructor(
		private readonly personService: PersonService,
	) { }

	public async adminSearchPerson(personFilters: any): Promise<Person[]> {
		return await this.personService.searchPerson(personFilters);
	}

	public async employeeSearchPerson(personFilters: any): Promise<Person[]>  {
		return await this.personService.searchPerson(personFilters);
	}
}