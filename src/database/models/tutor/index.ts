// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { TutorCreationAttributes, TutorModel } from '@database/models/tutor/tutor-interface';

// Models
import { Catalog } from '@database/models/catalog';
import { Country } from '@database/models/country';
import { Student } from '@database/models/student';

export class Tutor extends Model<TutorModel, TutorCreationAttributes> implements TutorModel {
	public address?: string;

	public cellPhone?: string;

	public city?: string;

	public countryId: number;

	public email: string;

	public id!: number;

	public ipAddress: string;

	public names!: string;

	public relationshipId!: number;

	public studentId!: number;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

Tutor.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		studentId: DataTypes.INTEGER.UNSIGNED,
		relationshipId: DataTypes.INTEGER.UNSIGNED,
		countryId: DataTypes.INTEGER.UNSIGNED,
		address: DataTypes.STRING,
		cellPhone: DataTypes.STRING,
		city: DataTypes.STRING,
		email: DataTypes.STRING,
		names: DataTypes.STRING,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'tutor',
		tableName: 'tutor',
		underscored: true,
	},
);

Student.hasOne(Tutor);
Tutor.belongsTo(Student);
Tutor.belongsTo(Catalog, { as: 'relationship', foreignKey: 'relationshipId' });
Tutor.belongsTo(Country, { as: 'country' });
