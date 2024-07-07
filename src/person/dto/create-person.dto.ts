import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class CreatePersonDto {

	@ApiProperty({
		example: 'Caio Donat'
	})
	name: string;

	@ApiProperty({
		example: 'cdonat@mail.io',
	})
	@IsEmail({}, {
		message: 'Email com formato invalido'
	})
	email: string;

	@ApiProperty()
	birthDate: Date;
}
