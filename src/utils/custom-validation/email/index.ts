// Dependencies
import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface,
	ValidationArguments,
} from 'class-validator';

// Repositories
import { PersonRepository } from '@api/persons/infrastructure/persistence/person-repository';

@ValidatorConstraint({ async: true })
export class IsPersonAlreadyExistConstraint implements ValidatorConstraintInterface {
	private personRepository: PersonRepository;

	constructor() {
		this.personRepository = new PersonRepository();
	}

	async validate(email: string, args: ValidationArguments): Promise<boolean> {
		const { object }: { object: any } = args;
		try {
			await this.personRepository.getPersonByEmail(email, object.personId);
			return false;
		} catch (error) {
			return true;
		}
	}
}

export function IsPersonAlreadyExist(validationOptions?: ValidationOptions) {
	return (object: unknown, propertyName: string): void => {
		registerDecorator({
			target: object.constructor,
			propertyName,
			options: validationOptions,
			constraints: [],
			validator: IsPersonAlreadyExistConstraint,
		});
	};
}
