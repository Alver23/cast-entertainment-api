// RouteConfig
import { RouteConfig } from "../index";

import { authRouter } from '@api/auth/router/auth-router';

// Mocks
jest.mock('@core/middlewares', () => ({
  protectRoutes: jest.fn()
}));

jest.mock('@api/auth/router/auth-router', () => ({
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

jest.mock('@api/users/router/user-router', () => ({
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
