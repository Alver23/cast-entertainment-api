// RouteConfig
import { RouteConfig } from "../index";

import { authRouter } from '@api/auth/infrastructure/routes/auth';

// Mocks
jest.mock('@core/middlewares', () => ({
  protectRoutes: jest.fn()
}));

jest.mock('@api/auth/infrastructure/routes/auth', () => ({
  authRouter: jest.fn()
}));

jest.mock('@api/artists/infrastructure/routes/artist-routes', () => ({
  artistRouter: jest.fn()
}));

jest.mock('@api/emergency-contact/infrastructure/routes/emergency-contact-routes', () => ({
  emergencyContactRouter: jest.fn()
}));

jest.mock('@api/persons/infrastructure/routes/person', () => ({
  personRouter: jest.fn()
}));

jest.mock('@api/users/infrastructure/routes', () => ({
  userRouter: jest.fn()
}));

jest.mock('@api/roles/router/role-router', () => ({
  roleRouter: jest.fn()
}));

jest.mock('@api/students/infrastructure/routes/student', () => ({
  studentRouter: jest.fn()
}));

jest.mock('@api/teachers/infrastructure/routes/teacher', () => ({
  teacherRouter: jest.fn()
}));

jest.mock('@api/activities/infrastructure/routes/activity', () => ({
  activityRouter: jest.fn()
}));

jest.mock('@api/itineraries/infrastructure/routes/itinerary', () => ({
  itineraryRouter: jest.fn()
}));

jest.mock('@api/itinerary-activity/infrastructure/routes/itinerary-activity', () => ({
  itineraryActivityRouter: jest.fn()
}));

jest.mock('@api/groups/infrastructure/routes/group', () => ({
  groupRouter: jest.fn()
}));


describe('RouteConfig', () => {
  const app = {
    use: jest.fn(),
  }
  let routes: RouteConfig;

  beforeEach(() => {
    routes = new RouteConfig(app as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should call the private routes', () => {
    routes.privateRoutes();
    expect(app.use).toHaveBeenCalledTimes(1);
  });

  it('should call the public routes', () => {
    routes.publicRoutes();
    expect(authRouter).toHaveBeenCalledTimes(1);
  });
});
