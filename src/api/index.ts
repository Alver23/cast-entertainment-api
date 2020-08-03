import * as cors from 'cors';
import * as express from 'express';
import * as methodOverride from 'method-override';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';

import { errorHandler, fourOFour, logErrors, wrapError } from '../core/middlewares';

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

api.use(fourOFour);
api.use(logErrors);
api.use(wrapError);
api.use(errorHandler);

export default api;
