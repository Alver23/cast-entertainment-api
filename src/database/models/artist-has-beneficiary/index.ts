// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import {
	ArtistHasBeneficiaryCreationAttributes,
	ArtistHasBeneficiaryModel,
} from '@database/models/artist-has-beneficiary/artist-has-beneficiary-interface';

// Models
import { Catalog } from '@database/models/catalog';
import { Person } from '@database/models/person';

export class ArtistHasBeneficiary extends Model<ArtistHasBeneficiaryModel, ArtistHasBeneficiaryCreationAttributes>
	implements ArtistHasBeneficiaryModel {
	public id!: number;

	public artistId!: number;

	public personId!: number;

	public percentage: number;

	public relationshipId: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

ArtistHasBeneficiary.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		artistId: DataTypes.INTEGER.UNSIGNED,
		personId: DataTypes.INTEGER.UNSIGNED,
		percentage: DataTypes.DECIMAL(10, 2),
		relationshipId: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'ArtistHasBeneficiary',
		tableName: 'artist_has_beneficiary',
		underscored: true,
		defaultScope: {
			include: [{ association: 'relationship' }, { association: 'person' }],
		},
	},
);

ArtistHasBeneficiary.belongsTo(Person, { as: 'person' });
ArtistHasBeneficiary.belongsTo(Catalog, { as: 'relationship', foreignKey: 'relationshipId' });
