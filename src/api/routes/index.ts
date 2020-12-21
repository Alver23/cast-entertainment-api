// Dependencies
import { Application } from 'express';

// Middleware
import { protectRoutes } from '@core/middlewares';

// Routes
import { authRouter } from '@api/auth/infrastructure/routes/auth';
import { artistRouter } from '@api/artists/infrastructure/routes/artist-routes';
import { emergencyContactRouter } from '@api/emergency-contact/infrastructure/routes/emergency-contact-routes';
import { personRouter } from '@api/persons/infrastructure/routes/person';
import { roleRouter } from '@api/roles/router/role-router';
import { studentRouter } from '@api/students/infrastructure/routes/student';
import { teacherRouter } from '@api/teachers/infrastructure/routes/teacher';
import { activityRouter } from '@api/activities/infrastructure/routes/activity';
import { itineraryRouter } from '@api/itineraries/infrastructure/routes/itinerary';
import { itineraryActivityRouter } from '@api/itinerary-activity/infrastructure/routes/itinerary-activity';
import { groupRouter } from '@api/groups/infrastructure/routes/group';
import { userRouter } from '@api/users/infrastructure/routes';

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
		teacherRouter(this.app);
		activityRouter(this.app);
		itineraryActivityRouter(this.app);
		itineraryRouter(this.app);
		groupRouter(this.app);
	}
}
