// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { RhythmModel, RhythmCreationAttributes } from '@database/models/rhythm/rhythm-interface';

export class Rhythm extends Model<RhythmModel, RhythmCreationAttributes> implements RhythmModel {
	public id!: number;

	public rhythmableId: number;

	public rhythmableType: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

Rhythm.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		rhythmableId: DataTypes.INTEGER.UNSIGNED,
		rhythmableType: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Rhythm',
		tableName: 'rhythm',
		underscored: true,
	},
);

Rhythm.addHook('afterFind', (findResult: any) => {
	/* eslint no-param-reassign: 0 */
	if (!Array.isArray(findResult)) findResult = [findResult];
	/* eslint no-restricted-syntax: 0 */
	for (const instance of findResult) {
		if (instance.rhythmableType === 'student' && instance.student !== undefined) {
			instance.rhythmable = instance.student;
		}
		// To prevent mistakes:
		delete instance.student;
		delete instance.dataValues.student;
	}
});
