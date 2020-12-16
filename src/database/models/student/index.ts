// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { StudentModel, StudentCreationAttributes } from '@database/models/student/student-interface';

// Models
import { Person } from '@database/models/person';
import { Rhythm } from '@database/models/rhythm';

export class Student extends Model<StudentModel, StudentCreationAttributes> implements StudentModel {
	public id!: number;

	public ipAddress: string;

	public personId!: number;

	public active?: boolean;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

Student.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		active: DataTypes.BOOLEAN,
		personId: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'student',
		tableName: 'student',
		underscored: true,
		defaultScope: {
			include: 'person',
		},
	},
);

Person.hasOne(Student);
Student.belongsTo(Person, { as: 'person' });
Student.hasMany(Rhythm, {
	foreignKey: 'rhythmableId',
	constraints: false,
	as: 'rhythm',
	scope: {
		rhythmableType: 'student',
	},
});
Rhythm.belongsTo(Student, { foreignKey: 'rhythmableId', constraints: false });
