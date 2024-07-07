import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('persons')
export class Person {

	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: 'name', length: 70, nullable: false })
	name: string;

	@Column({name: 'email'})
	email: string;

	@Column({name: 'birth_date'})
	birthDate: Date;

}
