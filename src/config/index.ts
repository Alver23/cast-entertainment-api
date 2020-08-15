import * as dotenv from 'dotenv';

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
		refresTokenExpires: parseInt(process.env.AUTH_REFRESH_TOKEN_EXPIRES, 10),
	},
	staticFiles: {
		directory: 'public',
		pathUploads: 'uploads/',
	},
	sentryDsn: process.env.SENTRY_DSN,
};
