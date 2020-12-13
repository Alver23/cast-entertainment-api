// Dependencies
import { Optional } from 'sequelize';

export interface RhythmModel {
	id: number;
	title: string;
	rhythmableId: number;
	rhythmableType: string;
}

export type RhythmCreationAttributes = Optional<RhythmModel, 'id'>;
