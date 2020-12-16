// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { ArtistHasSkillModel } from '@database/models/artist-has-skills/artist-has-skill-interface';
import { Catalog } from '@database/models/catalog';

export class ArtistHasSkill extends Model implements ArtistHasSkillModel {
	public id!: number;

	public artistId!: number;

	public skillId!: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

ArtistHasSkill.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		artistId: DataTypes.INTEGER.UNSIGNED,
		skillId: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'ArtistHasSkill',
		tableName: 'artist_has_skill',
		underscored: true,
		defaultScope: {
			include: 'skill',
		},
	},
);

ArtistHasSkill.belongsTo(Catalog, { foreignKey: 'skillId', as: 'skill' });
