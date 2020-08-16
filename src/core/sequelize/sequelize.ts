// Dependencies
import { Sequelize } from 'sequelize';

// Config
import { config } from '@config/index';

const debug = require('debug')(`${config.appName}:sequalize-connection`);
const databaseConfig = require('@database/config/config')[config.environment];

const { database, username, password } = databaseConfig;

export const sequelize = new Sequelize(database, username, password, databaseConfig);

sequelize
	.authenticate()
	.then(() => debug('Connection has been established successfully.'))
	.catch((err) => debug(`Unable to connect to the database: ${err}`));
