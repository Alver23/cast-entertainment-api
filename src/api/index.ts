// Dependencies
import cors from 'cors';
import express, { Application } from 'express';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import helmet from 'helmet';

// Middlewares
import { addResponseJsonToResponse } from '@core/middlewares/response';
import { fourOFour } from '@core/middlewares/404';
import { errorHandler } from '@core/middlewares/error-handler';
import { appendIpAddressToBody } from '@core/middlewares';

// Routes config
import { RouteConfig } from '@api/routes';

const api: Application = express();

const routeConfig = new RouteConfig(api);

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
api.use(addResponseJsonToResponse.handler());

routeConfig.publicRoutes();
routeConfig.privateRoutes();

api.use(fourOFour.handler());
api.use(errorHandler.logErrors());
api.use(errorHandler.wrapperError());
api.use(errorHandler.handler());

export default api;
