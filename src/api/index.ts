// Dependencies
import cors from 'cors';
import express from 'express';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import helmet from 'helmet';

// Middlewares
import { errorHandler, fourOFour, logErrors, wrapError, appendIpAddressToBody } from '../core/middlewares';

// Routers
import { personRouter } from './persons/router/person-router';
import { userRouter } from './users/router/user-router';

const api: express.Application = express();

// Enable CORS
api.use(cors());

// Helmet Segurity
api.use(helmet());

// Enable method-override for old clients
api.use(methodOverride());

// parse application/json
api.use(bodyParser.json());

// Enable request body parsing
api.use(bodyParser.urlencoded({ extended: false }));

// Add ip address to body
api.use(appendIpAddressToBody);

personRouter(api);
userRouter(api);

api.use(fourOFour);
api.use(logErrors);
api.use(wrapError);
api.use(errorHandler);

export default api;
