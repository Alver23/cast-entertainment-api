// Dependencies
import { Application } from 'express';

// Middleware
import { protectRoutes } from '@core/middlewares';

// Routes
import { authRouter } from '@api/auth/router/auth-router';
import { artistRouter } from '@api/artists/infrastructure/routes/artist-routes';
import { emergencyContactRouter } from '@api/emergency-contact/infrastructure/routes/emergency-contact-routes';
import { personRouter } from '@api/persons/infrastructure/routes/person';
import { userRouter } from '@api/users/router/user-router';
import { roleRouter } from '@api/roles/router/role-router';
import { studentRouter } from '@api/students/infrastructure/routes/student';

export class RouteConfig {
	constructor(private readonly app: Application) {}

	public publicRoutes(): void {
		authRouter(this.app);
	}

	public privateRoutes(): void {
		this.app.use('/', protectRoutes);
		personRouter(this.app);
		userRouter(this.app);
		roleRouter(this.app);
		artistRouter(this.app);
		emergencyContactRouter(this.app);
		studentRouter(this.app);
	}
}
