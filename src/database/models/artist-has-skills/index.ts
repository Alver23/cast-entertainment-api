// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { ArtistHasSkillModel } from '@database/models/artist-has-skills/artist-has-skill-interface';

export class ArtistHasSkill extends Model implements ArtistHasSkillModel {
	public id!: number;

	public artistId!: number;

	public skillId!: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;
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
		tableName: 'artist_has_skills',
		underscored: true,
		paranoid: true,
	},
);
