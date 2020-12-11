// Entities
import { IStudentEntity } from '@api/students/domain/entities/student';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Repositories
import { PersonRepository } from '@api/persons/infrastructure/persistence/person-repository';
import { TutorRepository } from '@api/students/infrastructure/persistence/tutor';
import { RhythmRepository } from '@api/shared/rhythm/infrastructure/persistence/rhythm';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

// Models
import { Student } from '@database/models/student';
import { Rhythm } from '@database/models/rhythm';
import { IQueryParams } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export class StudentRepository extends BaseCrudRepository<typeof Student, IStudentEntity, IStudentEntity> {
	private readonly personRepository: PersonRepository;

	private readonly tutorRepository: TutorRepository;

	private readonly rhythmRepository: RhythmRepository;

	constructor() {
		super(Student);
		this.personRepository = new PersonRepository();
		this.tutorRepository = new TutorRepository();
		this.rhythmRepository = new RhythmRepository();
	}

	public async findOne({ query }: IQueryParams): Promise<IStudentEntity> {
		const options = {
			include: [{ association: 'person' }, { association: 'tutor' }, { association: 'rhythm' }],
		};
		return super.findOne({ query, options });
	}

	public async create(data: IStudentEntity): Promise<IStudentEntity> {
		return this.upsert(data);
	}

	public async updateOne(id: number, data: IStudentEntity): Promise<IStudentEntity> {
		await super.findOne({ query: { id } });
		return this.upsert(data, id);
	}

	public async upsert(data: IStudentEntity, id?: number): Promise<IStudentEntity> {
		return sequelize.transaction(async (transaction) => {
			const { active, ipAddress, personId, tutor, rhythms, ...personValues } = data;

			const { id: newPersonId } = await this.personRepository.updateOrCreate(
				{ ...personValues, ipAddress },
				personId && { id: personId },
				transaction,
			);

			const student: any = await this.updateOrCreate({ active, ipAddress, personId: newPersonId }, id && { id }, transaction);

			if (rhythms?.length > 0) {
				await Promise.all(
					rhythms.map(async (item) => {
						await Rhythm.destroy({ where: { rhythmableId: student.id, rhythmableType: 'student' } });
						return student.createRhythm({ title: item }, transaction);
					}),
				);
			}

			if (tutor) {
				const { id: tutorId, ...tutorValues } = tutor;
				await this.tutorRepository.updateOrCreate(
					{ studentId: student.id, ipAddress, ...tutorValues },
					tutorId && { id: tutorId },
					transaction,
				);
			}

			return student;
		});
	}
}
