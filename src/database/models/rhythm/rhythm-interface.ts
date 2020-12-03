// Dependencies
import { Optional } from 'sequelize';

export interface RhythmModel {
	id: number;
	rhythmableId: number;
	rhythmableType: string;
}

export type RhythmCreationAttributes = Optional<RhythmModel, 'id'>;
