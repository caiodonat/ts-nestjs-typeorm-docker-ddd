import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";

export class CreatePersonDto {

	@ApiProperty({
		example: 'Caio Donat'
	})
	name: string;
	
	@ApiProperty({
		example: 'cdonat@mail.io'
	})
	email: string;

	@ApiProperty()
	birthDate: Date;
}
