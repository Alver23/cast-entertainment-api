import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const env = process.env.NODE_ENV !== 'production';
const appUrl = process.env.APP_URL;
export const config = {
	env,
	appUrl,
	domain: env ? `${appUrl}:${port}` : appUrl,
	appName: process.env.APP_NAME,
	port: process.env.PORT || 3001,
	environment: process.env.NODE_ENV || 'development',
	jwt: {
		secret: process.env.AUTH_JWT_SECRET,
		expires: process.env.AUTH_JWT_EXPIRES,
	},
	staticFiles: {
		directory: 'public',
		pathUploads: 'uploads/',
	},
	sentryDsn: process.env.SENTRY_DSN,
	newrelic: {
		appName: [process.env.APP_NAME],
		license: process.env.NEWRELIC_LICENSE_KEY,
		logLevel: process.env.NEWRELIC_LOG_LEVEL,
	},
};
