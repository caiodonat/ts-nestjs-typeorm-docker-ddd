import { Repository } from "typeorm";
import { Person } from "./entities/person.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePersonDto } from "./dto/create-person.dto";
import { SearchPersonDto } from "./dto/search-person.dto";

@Injectable()
export default class PersonRepository {

	constructor(
		@InjectRepository(Person)
		private readonly personCrud: Repository<Person>
	) { }

	public async insertPerson(newPerson: CreatePersonDto): Promise<Person> {
		return this.personCrud.save(newPerson);
	}

	public async selectManyPersonWithFilters(filters: SearchPersonDto): Promise<Person[]> {
		return await this.personCrud.find({
			where: filters
		});
	}
}