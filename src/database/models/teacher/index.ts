// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { Rhythm } from '@database/models/rhythm';
import { Person } from '@database/models/person';

// Interfaces
import { TeacherCreationAttributes, TeacherModel } from '@database/models/teacher/teacher-interface';

export class Teacher extends Model<TeacherModel, TeacherCreationAttributes> implements TeacherModel {
	public id!: number;

	public personId!: number;

	public nativeLanguage?: number;

	public otherLanguage?: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

Teacher.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		personId: DataTypes.INTEGER.UNSIGNED,
		nativeLanguage: DataTypes.INTEGER.UNSIGNED,
		otherLanguage: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'teacher',
		tableName: 'teacher',
		underscored: true,
		defaultScope: {
			include: 'person',
		},
	},
);

Person.hasOne(Teacher);
Teacher.belongsTo(Person, { as: 'person' });
Teacher.hasMany(Rhythm, {
	foreignKey: 'rhythmableId',
	constraints: false,
	as: 'rhythm',
	scope: {
		rhythmableType: 'teacher',
	},
});
Rhythm.belongsTo(Teacher, { foreignKey: 'rhythmableId', constraints: false });
