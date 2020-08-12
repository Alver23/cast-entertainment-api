// Dependencies
import { Sequelize } from 'sequelize';

// Config
import { config } from '../../config';

const {
	appName,
	databaseConfig: { url },
} = config;
const debug = require('debug')(`${appName}:sequalize-connection`);

export const sequelize = new Sequelize(url);

sequelize
	.authenticate()
	.then(() => debug('Connection has been established successfully.'))
	.catch((err) => debug(`Unable to connect to the database: ${err}`));
