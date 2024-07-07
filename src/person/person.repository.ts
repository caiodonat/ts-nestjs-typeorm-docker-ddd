import { Repository } from "typeorm";
import { Person } from "./entities/person.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePersonDto } from "./dto/create-person.dto";

@Injectable()
export default class PersonRepository {

	constructor(
		@InjectRepository(Person)
		private readonly personCrud: Repository<Person>
	) { }

	public async insertPerson(newPerson: CreatePersonDto) {
		// this.personCrud.create(newPerson);

		return this.personCrud.save(newPerson);
	}

	public async selectAllPerson() {
		return await this.personCrud.find();
	}

}