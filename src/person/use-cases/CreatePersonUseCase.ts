import { CreatePersonDto } from "../dto/create-person.dto";
import { Person } from "../entities/person.entity";
import { PersonService } from "../person.service";

export default class CreatePersonUseCase {

	// private creatorId?: Person['id'];

	// private newPerson: CreatePersonDto;

	constructor(
		private readonly personService: PersonService,
		// newPerson: CreatePersonDto,
		// creatorId?: Person['id']
	) {
		// if (creatorId != undefined) {
		// 	this.creatorId = creatorId;
		// }

		// this.newPerson = newPerson;

	}

	public async selfCreate(newPerson: CreatePersonDto) {
		return await this.personService.create(newPerson);
	}

	public async createByOtherPerson(newPerson: CreatePersonDto, creatorId?: Person['id']) {

		// Validated if {@link creatorId} has authorization.

		return await this.personService.create(newPerson);
	}


}